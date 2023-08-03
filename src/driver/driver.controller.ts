import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver';
import { Driver } from './models/driver.model';
import { UpdateDriverDto } from './dto/update-driver';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('DRIVERS')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @ApiOperation({ summary: 'Create Driver' })
  @Post('create')
  async createDriver(
    @Body() creaateDriverDto: CreateDriverDto,
  ): Promise<Driver> {
    return await this.driverService.createDriver(creaateDriverDto);
  }
  @ApiOperation({ summary: 'Get all Drivers' })
  @Get()
  async getAllDriver(): Promise<Driver[]> {
    return this.driverService.getAllDriver();
  }
  @ApiOperation({ summary: 'Get Driver by ID' })
  @Get('/:id')
  getDriverId(@Param('id') id: string) {
    return this.driverService.getDriverById(Number(id));
  }
  @ApiOperation({ summary: 'Delete Driver' })
  @Delete('delete/:id')
  async deleteDriver(@Param('id') id: string) {
    const result = await this.driverService.DeleteDriver(Number(id));
    return result;
  }
  @ApiOperation({ summary: 'Update Driver' })
  @Put('update/:id')
  async updateDriver(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    const updated = await this.driverService.UpdateDriver(
      Number(id),
      updateDriverDto,
    );
    return updated;
  }
}
