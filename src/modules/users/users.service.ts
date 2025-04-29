/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserCreateRepository, UserFindRepository } from './repositories/index';

@Injectable()
export class UsersService {
  constructor(
    private readonly userCreateRepo: UserCreateRepository,
    private readonly userFindRepo: UserFindRepository,
  ) {}

  async create(userData: {
    username: string;
    email: string;
    password: string;
  }) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      await this.userCreateRepo.createUser(
        userData.username,
        userData.email,
        hashedPassword,
      );

      return {
        message: 'Registration successful',
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('System error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByEmail(email: string) {
    return await this.userFindRepo.findByEmail(email);
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;

    return user;
  }
}
