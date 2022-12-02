import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    console.log(await this.usersRepository.find());
    return this.usersRepository.find();
  }

  async createUser(): Promise<User> {
    const user = await this.usersRepository.create({
      login: 'asasasasas',
      hashedPassword: 'cnjxscn',
    });
    return user;
  }
}
