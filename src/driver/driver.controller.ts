import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { createDriverDto } from './dto/create-driver.dto';
import { Driver } from './models/driver.model';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('create')
  async createDriver(@Body() createDriverDto: createDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }
  @Get('all')
  async getAllDrivers(): Promise<Driver[]> {
    return this.driverService.getAllDrivers();
  }
  @Delete(':id')
  async deleteDriver(@Param('id') id: string): Promise<number> {
    return this.driverService.deleteDriverById(+id);
  }
}

// {include{all:true}}
