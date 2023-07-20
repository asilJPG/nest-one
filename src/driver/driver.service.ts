import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { createDriverDto } from './dto/create-driver.dto';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepo: typeof Driver) {}

  async createDriver(createDriverDto: createDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }
  async getAllDrivers(): Promise<Driver[]> {
    const drivers = await this.driverRepo.findAll();
    return drivers;
  }
  async deleteDriverById(id: number): Promise<number> {
    const driver = await this.driverRepo.destroy({ where: { id } })[0];
    console.log(driver);
    return driver;
  }
}
