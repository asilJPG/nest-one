import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ROLES')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: 'Create Role' })
  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }
  @ApiOperation({ summary: 'Get all Roles' })
  @Get()
  getAllRoles() {
    return this.rolesService.getAllRoles();
  }
  @ApiOperation({ summary: 'Get Role by Value' })
  @Get(':value')
  getByRoleValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
