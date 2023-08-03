import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder';
import { UpdateBuilderDto } from './dto/update-builder';

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }

  async getAllBuilders(): Promise<Builder[]> {
    const builders = await this.builderRepo.findAll();
    return builders;
  }

  async getBuilderById(id: number): Promise<Builder> {
    try {
      const found_builder = await this.builderRepo.findOne({
        where: {
          id,
        },
      });
      return found_builder;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteBuilder(id: number) {
    const deleted = await this.builderRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateBuilder(
    id: number,
    updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    const builder = await this.builderRepo.update(updateBuilderDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }
}
