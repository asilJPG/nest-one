import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async registration(userDto: CreateUserDto) {
    const condidate = await this.userService.getUserbyEmail(userDto.email);
    // if (condidate) {
    //   throw new HttpException(
    //     'Bunday foydalanovchi mavjut',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });
    return user;
  }
}
