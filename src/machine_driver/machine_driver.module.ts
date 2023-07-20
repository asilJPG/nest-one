import { Module } from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { MachineDriverController } from './machine_driver.controller';

@Module({
  controllers: [MachineDriverController],
  providers: [MachineDriverService]
})
export class MachineDriverModule {}
