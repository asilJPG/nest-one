import { Injectable } from '@nestjs/common';
import { Builder } from './models/builder.model';
import { createCompanyDto } from 'src/company/dto/create-company.dto';
import { InjectModel } from '@nestjs/sequelize';
import { createBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: createBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }
  async getAllBuilder(): Promise<Builder[]> {
    const builders = await this.builderRepo.findAll();
    return builders;
  }

  async getBuilderById(id: number): Promise<Builder> {
    const builder = await this.builderRepo.findOne({ where: { id } });
    return builder;
  }

  async deleteBuilderById(id: number): Promise<number> {
    // const company = await this.companyRepo.findByPk(id);
    const builder = await this.builderRepo.destroy({ where: { id } })[0];
    console.log(builder);

    return builder;
  }
}
