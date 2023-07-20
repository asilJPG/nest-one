import { Test, TestingModule } from '@nestjs/testing';
import { MachineDriverController } from './machine_driver.controller';
import { MachineDriverService } from './machine_driver.service';

describe('MachineDriverController', () => {
  let controller: MachineDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineDriverController],
      providers: [MachineDriverService],
    }).compile();

    controller = module.get<MachineDriverController>(MachineDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
