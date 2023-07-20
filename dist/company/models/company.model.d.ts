import { Model } from 'sequelize-typescript';
interface CompanyAttr {
    name: string;
    address: string;
    phone: string;
}
export declare class Company extends Model<Company, CompanyAttr> {
    id: number;
    name: string;
    address: string;
    phone: string;
}
export {};
