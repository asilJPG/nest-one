import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  image: string;
  userid: number;
}

@Table({ tableName: 'post' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unilkal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'Post1', description: 'description' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
  @ApiProperty({ example: 'Bu yerda maqola', description: 'Maqola matni' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
  @ApiProperty({ example: 'rasm', description: 'rasm description' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
  @BelongsTo(() => User)
  author: User;
}
