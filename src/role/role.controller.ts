import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('add')
  crateRole(@Body() CreateRoleDto: CreateRoleDto) {
    return this.roleService.createRole(CreateRoleDto);
  }
  @Get('all')
  getAllRoles() {
    return this.roleService.getAllRoles();
  }
  @Get(':value')
  async getRoleValue(@Param('value') value: string): Promise<Role> {
    return this.roleService.getRolebyValue(value);
  }
}

// @Get(":value")
// getRoleValue(@Param("value"))
