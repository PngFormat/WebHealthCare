import {
  Body,
  Injectable,
  NotFoundException,
  Param,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  async register(
    @Body() requestBody,
  ): Promise<{ access_token: string } | NotFoundException> {
    const { login, password } = requestBody;
    const candidate = await this.usersRepository.findOneBy({ login });
    if (!candidate) {
      const hashedUserPassword = await bcrypt.hash(password, 5);
      console.log(hashedUserPassword, 'hashedPassword');
      const newUser = await this.usersRepository.create({
        login,
        hashedPassword: hashedUserPassword,
      });
      await this.usersRepository.save(newUser);
      return { access_token: 'jfvuhofijcfik' };
    } else {
      return new NotFoundException('User is exist');
    }
  }

  async login(
    @Body() requestBody,
  ): Promise<{ access_token: string } | UnauthorizedException> {
    const { login, password } = requestBody;
    const { login: candidateLogin, hashedPassword } =
      await this.usersRepository.findOneBy({
        login,
      });
    if (candidateLogin) {
      const compare = await bcrypt.compare(password, hashedPassword);
      if (compare) {
        return { access_token: 'jiraaswuse' };
      }
    }
    return new UnauthorizedException('User is not authorized');
  }

  private async deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.usersRepository.delete({ id });
  }
}
