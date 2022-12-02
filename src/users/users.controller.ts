import { Controller, Post, Get, Req, Res, HttpCode, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(201)
  @Post('create')
  createUser(): Promise<User> {
    return this.usersService.createUser();
  }

  @Get('get')
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
