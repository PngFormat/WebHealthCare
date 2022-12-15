import { Body, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(@Body() loginDto) {
    return this.usersService.login(loginDto);
  }

  async registration(@Body() registerDto) {
    return this.usersService.register(registerDto);
  }
}
