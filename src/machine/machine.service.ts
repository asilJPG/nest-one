import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';
import { CreateMachineDto } from './dto/create-machine';
import { UpdateMachineDto } from './dto/update-machine';

@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine) private machineRepo: typeof Machine) {}

  async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
    const machine = await this.machineRepo.create(createMachineDto);
    return machine;
  }

  async getAllMachine(): Promise<Machine[]> {
    const machine = await this.machineRepo.findAll({ include: { all: true } });
    return machine;
  }

  async getMachineById(id: number): Promise<Machine> {
    try {
      const found_machine = await this.machineRepo.findOne({
        where: {
          id,
        },
      });
      return found_machine;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteMachine(id: number) {
    const deleted = await this.machineRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateMachine(
    id: number,
    updateMachineDto: UpdateMachineDto,
  ): Promise<Machine> {
    const machine = await this.machineRepo.update(updateMachineDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0].dataValues;
  }
}
