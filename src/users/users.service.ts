import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly roleService: RoleService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(CreateUserDto);
    const role = await this.roleService.getRolebyValue('ADMIN');
    if (!role) {
      return 'Role not found';
    }
    await newUser.$set('roles', [role.id]);
    await newUser.save();
    newUser.roles = [role];

    return newUser;
  }
  async getAll() {
    const roles = await this.userRepository.findAll({ include: { all: true } });
    return roles;
  }
  async getUserbyEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true }, // eto vizivaet ostalnie foregn keys tam vidut svazanie
    });
  }
}
