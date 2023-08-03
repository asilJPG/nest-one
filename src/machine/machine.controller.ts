import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine';
import { Machine } from './models/machine.model';
import { UpdateMachineDto } from './dto/update-machine';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('MACHINES')
@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @ApiOperation({ summary: 'Create Machine' })
  @Post('create')
  async createMachine(
    @Body() creaateMachineDto: CreateMachineDto,
  ): Promise<Machine> {
    return await this.machineService.createMachine(creaateMachineDto);
  }
  @ApiOperation({ summary: 'Get all Machines' })
  @Get()
  async getAllMachine(): Promise<Machine[]> {
    return this.machineService.getAllMachine();
  }
  @ApiOperation({ summary: 'Get Machine by ID' })
  @Get('/:id')
  getMachineId(@Param('id') id: string) {
    return this.machineService.getMachineById(Number(id));
  }
  @ApiOperation({ summary: 'Delete Machine' })
  @Delete('delete/:id')
  async deleteMachine(@Param('id') id: string) {
    const result = await this.machineService.DeleteMachine(Number(id));
    return result;
  }
  @ApiOperation({ summary: 'Update Machine' })
  @Put('update/:id')
  async updateMachine(
    @Param('id') id: string,
    @Body() updateMachineDto: UpdateMachineDto,
  ): Promise<Machine> {
    const updated = await this.machineService.UpdateMachine(
      Number(id),
      updateMachineDto,
    );
    return updated;
  }
}
