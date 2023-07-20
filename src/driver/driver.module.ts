import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { Column, DataType } from 'sequelize-typescript';

@Module({
  imports: [SequelizeModule.forFeature([Driver])],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}
