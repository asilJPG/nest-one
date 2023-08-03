import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Company } from '../../company/models/company.model';

interface BuilderAttr {
  full_name: string;
  birth_day: Date;
  salary: number;
  company_id: number;
}

@Table({ tableName: 'builder' })
export class Builder extends Model<Builder, BuilderAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.DATE,
  })
  birth_day: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  salary: number;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;
}
