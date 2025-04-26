/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/modules/users/entity/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(
    userData: Partial<User>,
  ): Promise<{ message: string; user?: User }> {
    try {
      const user = this.userRepository.create(userData);
      user.created_at = new Date();
      user.updated_at = new Date();
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      const savedUser = await this.userRepository.save(user);

      return {
        message: 'Đăng ký thành công',
        user: savedUser,
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException('Email đã tồn tại', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Lỗi hệ thống', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  findByEmail(email: string) {
    const user = this.userRepository.findOneBy({ email: email });
    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) {
      return null;
    }
    const status = bcrypt.compareSync(password, user.password);
    if (!status) {
      return null;
    }
    return user;
  }
}
