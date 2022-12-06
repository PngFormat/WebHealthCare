import {
  Body,
  Controller,
  // Delete,
  // Get,
  HttpCode,
  NotFoundException,
  // Param,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(200)
  @Post('login')
  login(
    @Body() loginDto,
  ): Promise<{ access_token: string } | UnauthorizedException> {
    return this.authService.login(loginDto);
  }

  @Post('registration')
  registration(
    @Body() registerDto,
  ): Promise<{ access_token: string } | NotFoundException> {
    return this.authService.registration(registerDto);
  }

  // @Get('get')
  // getUsers(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }

  // @Delete(':id')
  // @HttpCode(200)
  // deleteEmployee(@Param('id') id: number) {
  //   return this.usersService.deleteUser(id);
  // }
}
