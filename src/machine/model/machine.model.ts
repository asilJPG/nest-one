import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Company } from 'src/company/models/company.model';
import { Driver } from 'src/driver/models/driver.model';
import { MachineDriver } from 'src/machine_driver/models/machine_driver.model';

interface MachineAttr {
  full_name: string;
  last_name: string;
}

@Table({ tableName: 'machine' })
export class Machine extends Model<Machine, MachineAttr> {
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
  name: string;
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsToMany(() => Driver, () => MachineDriver)
  drivers: Driver[];
}
