import { Driver } from './models/driver.model';
import { createDriverDto } from './dto/create-driver.dto';
export declare class DriverService {
    private driverRepo;
    constructor(driverRepo: typeof Driver);
    createDriver(createDriverDto: createDriverDto): Promise<Driver>;
    getAllDrivers(): Promise<Driver[]>;
    deleteDriverById(id: number): Promise<number>;
}
