import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Machine } from 'src/machine/model/machine.model';
import { MachineDriver } from 'src/machine_driver/models/machine_driver.model';

interface DriverAttr {
  full_name: string;
  last_name: string;
}

@Table({ tableName: 'driver' })
export class Driver extends Model<Driver, DriverAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  full_name: string;
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @BelongsToMany(() => Machine, () => MachineDriver)
  machines: Machine[];
}
