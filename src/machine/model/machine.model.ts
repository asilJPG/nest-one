import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
} from 'sequelize-typescript';
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
  companyId: string;
}
