import { Test, TestingModule } from '@nestjs/testing';
import { MachineDriverService } from './machine_driver.service';

describe('MachineDriverService', () => {
  let service: MachineDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineDriverService],
    }).compile();

    service = module.get<MachineDriverService>(MachineDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
