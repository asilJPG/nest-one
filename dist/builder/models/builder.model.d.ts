import { Model } from 'sequelize-typescript';
interface BuilderAttr {
    full_name: string;
    birthday: Date;
    salary: number;
    companyId: number;
}
export declare class Builder extends Model<Builder, BuilderAttr> {
    id: number;
    full_name: string;
    birthday: Date;
    salary: number;
    companyId: number;
}
export {};
