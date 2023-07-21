// import {  DataType, Model } from "sequelize"
import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { UserRoles } from './user-roles.model';
import { User } from 'src/users/model/user.model';
interface RoleCreationAttrs {
  name: string;
  address: string;
  phone: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
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
  value: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
