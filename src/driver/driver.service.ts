import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver';
import { UpdateDriverDto } from './dto/update-driver';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepo: typeof Driver) {}

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }

  async getAllDriver(): Promise<Driver[]> {
    const driver = await this.driverRepo.findAll({ include: { all: true } });
    return driver;
  }

  async getDriverById(id: number): Promise<Driver> {
    try {
      const found_driver = await this.driverRepo.findOne({
        where: {
          id,
        },
      });
      return found_driver;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteDriver(id: number) {
    const deleted = await this.driverRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateDriver(
    id: number,
    updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    const driver = await this.driverRepo.update(updateDriverDto, {
      where: { id },
      returning: true,
    });
    return driver[1][0].dataValues;
  }
}
