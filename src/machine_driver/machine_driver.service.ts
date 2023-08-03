import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine_driver } from './models/machine_driver.model';
import { CreateMachine_driverDto } from './dto/create-machine_driver';
import { UpdateMachine_driverDto } from './dto/update-machine_driver';

@Injectable()
export class Machine_driverService {
  constructor(
    @InjectModel(Machine_driver)
    private machine_driverRepo: typeof Machine_driver,
  ) {}

  async createMachine_driver(
    createMachine_driverDto: CreateMachine_driverDto,
  ): Promise<Machine_driver> {
    const machine_driver = await this.machine_driverRepo.create(
      createMachine_driverDto,
    );
    return machine_driver;
  }

  async getAllMachine_driver(): Promise<Machine_driver[]> {
    const machine_driver = await this.machine_driverRepo.findAll({
      include: { all: true },
    });
    return machine_driver;
  }

  async getMachine_driverById(id: number): Promise<Machine_driver> {
    try {
      const found_machine_driver = await this.machine_driverRepo.findOne({
        where: {
          id,
        },
      });
      return found_machine_driver;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteMachine_driver(id: number) {
    const deleted = await this.machine_driverRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateMachine_driver(
    id: number,
    updateMachine_driverDto: UpdateMachine_driverDto,
  ): Promise<Machine_driver> {
    const machine_driver = await this.machine_driverRepo.update(
      updateMachine_driverDto,
      {
        where: { id },
        returning: true,
      },
    );
    return machine_driver[1][0].dataValues;
  }
}
