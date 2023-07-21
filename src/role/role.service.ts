import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(CreateRoleDto: CreateRoleDto) {
    const newRole = await this.roleRepository.create(CreateRoleDto);
    return newRole;
  }
  async getRolebyValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }
  async getAllRoles() {
    const roles = await this.roleRepository.findAll({ include: { all: true } });
    return roles;
  }
}
