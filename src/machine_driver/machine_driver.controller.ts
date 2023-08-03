import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Machine_driverService } from './machine_driver.service';
import { CreateMachine_driverDto } from './dto/create-machine_driver';
import { Machine_driver } from './models/machine_driver.model';
import { UpdateMachine_driverDto } from './dto/update-machine_driver';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('MACHINE-DRIVER')
@Controller('machine_driver')
export class Machine_driverController {
  constructor(private readonly machine_driverService: Machine_driverService) {}
  @ApiOperation({ summary: 'Create machine-driver' })
  @Post('create')
  async createMachine_driver(
    @Body() creaateMachine_driverDto: CreateMachine_driverDto,
  ): Promise<Machine_driver> {
    return await this.machine_driverService.createMachine_driver(
      creaateMachine_driverDto,
    );
  }
  @ApiOperation({ summary: 'Get all machine-drivers' })
  @Get()
  async getAllMachine_driver(): Promise<Machine_driver[]> {
    return this.machine_driverService.getAllMachine_driver();
  }
  @ApiOperation({ summary: 'Get machine-driver' })
  @Get('/:id')
  getMachine_driverId(@Param('id') id: string) {
    return this.machine_driverService.getMachine_driverById(Number(id));
  }
  @ApiOperation({ summary: 'Delete machine-driver' })
  @Delete('delete/:id')
  async deleteMachine_driver(@Param('id') id: string) {
    const result = await this.machine_driverService.DeleteMachine_driver(
      Number(id),
    );
    return result;
  }
  @ApiOperation({ summary: 'Update machine-driver' })
  @Put('update/:id')
  async updateMachine_driver(
    @Param('id') id: string,
    @Body() updateMachine_driverDto: UpdateMachine_driverDto,
  ): Promise<Machine_driver> {
    const updated = await this.machine_driverService.UpdateMachine_driver(
      Number(id),
      updateMachine_driverDto,
    );
    return updated;
  }
}
