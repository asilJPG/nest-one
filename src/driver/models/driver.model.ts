import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
} from 'sequelize-typescript';
import { Machine } from 'src/machine/model/machine.model';

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

  @BelongsTo(() => Machine)
  machines: Machine[];
}
