/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserCreateRepository } from './repositories/repository-create-user/user-create.repository';
import { UserFindRepository } from './repositories/repository-find-user/user-find.repository';
import * as bcrypt from 'bcrypt';

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
        message: 'Đăng ký thành công',
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Email đã tồn tại', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Lỗi hệ thống', HttpStatus.INTERNAL_SERVER_ERROR);
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
