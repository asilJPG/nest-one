import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Driver } from 'src/driver/models/driver.model';
import { Machine } from 'src/machine/model/machine.model';

interface MachineDriverAttr {
  full_name: string;
  last_name: string;
}

@Table({ tableName: 'machine_driver' })
export class MachineDriver extends Model<MachineDriver, MachineDriverAttr> {
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
