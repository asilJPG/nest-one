import { DriverService } from './driver.service';
import { createDriverDto } from './dto/create-driver.dto';
import { Driver } from './models/driver.model';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    createDriver(createDriverDto: createDriverDto): Promise<Driver>;
    getAllDrivers(): Promise<Driver[]>;
    deleteDriver(id: string): Promise<number>;
}
