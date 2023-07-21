import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Driver } from 'src/driver/models/driver.model';
import { Machine } from 'src/machine/model/machine.model';

interface MachineDriverCreatorAttr {
  machineId: number;
  driverId: number;
}

@Table({ tableName: 'machine_driver', createdAt: false, updatedAt: false })
export class MachineDriver extends Model<
  MachineDriver,
  MachineDriverCreatorAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Machine)
  @Column({ type: DataType.INTEGER })
  machineId: number;
  @ForeignKey(() => Driver)
  @Column({ type: DataType.INTEGER })
  driverId: number;
}
