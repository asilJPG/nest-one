import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  // MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user1', description: 'Foydalanuvchi nomi' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'user1@gmail.uz',
    description: 'Foydalanuvchi emaili',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Uzbek1$t0n',
    description: 'Foydalanuvchi passwordi',
  })
  // @MinLength(6)
  @IsStrongPassword({ minLength: 6 })
  password: string;
}
