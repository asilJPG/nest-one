import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';
import { Roles } from '../decorators/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('USERS')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create User' })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }
  @ApiOperation({ summary: 'Get all Users' })
  @ApiResponse({ status: 200, description: 'List of Users', type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUSers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
  @ApiOperation({ summary: 'Add Role to User' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post('add-role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }
  @ApiOperation({ summary: 'Remove Role from User' })
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post('remove-role')
  removeRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.removeRole(addRoleDto);
  }
  @ApiOperation({ summary: 'Delete User' })
  @Delete('delete/:id')
  async deleteUser(@Param('id') id: string) {
    const result = await this.usersService.deleteUser(Number(id));
    return result;
  }
  @ApiOperation({ summary: 'Get User by ID' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getOneUser(@Param('id') id: number) {
    return this.usersService.getOneUser(Number(id));
  }
  @ApiOperation({ summary: 'Activate User' })
  @HttpCode(200)
  @Post('activate')
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }
  @ApiOperation({ summary: 'De-activate User' })
  @HttpCode(200)
  @Post('de-activate')
  deActivateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.deActivateUser(activateUserDto);
  }
}
