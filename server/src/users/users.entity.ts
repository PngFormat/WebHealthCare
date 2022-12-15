import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  login: string;
  @Column()
  hashedPassword: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  gender: 'male' | 'female';
  @Column({
    array: true,
    default: ['users'],
    nullable: false,
  })
  roles: string;
  @Column()
  refresh_token: string;
}
