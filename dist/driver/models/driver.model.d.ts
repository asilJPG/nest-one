import { Model } from 'sequelize-typescript';
interface DriverAttr {
    full_name: string;
    last_name: string;
}
export declare class Driver extends Model<Driver, DriverAttr> {
    id: number;
    full_name: string;
    last_name: string;
}
export {};
