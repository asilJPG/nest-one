import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('AUTHORIZATION')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Registration' })
  @Post('/registration')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }
  @ApiOperation({ summary: 'Login' })
  @HttpCode(200)
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
