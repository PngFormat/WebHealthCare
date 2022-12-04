import {
  Controller,
  Post,
  Get,
  Delete,
  HttpCode,
  Param,
  Body,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(200)
  @Post('login')
  login(
    @Body() loginDto,
  ): Promise<{ access_token: string } | UnauthorizedException> {
    return this.usersService.login(loginDto);
  }

  @Post('register')
  register(
    @Body() registerDto,
  ): Promise<{ access_token: string } | NotFoundException> {
    return this.usersService.register(registerDto);
  }

  @Get('get')
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Delete(':id')
  @HttpCode(200)
  deleteEmployee(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
