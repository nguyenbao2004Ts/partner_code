/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.logger.debug(
      `JWT_SECRET: ${this.configService.get<string>('JWT_SECRET')}`,
    );
    this.logger.debug(
      `JWT_ACCESS_TOKEN_EXPIRE: ${this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRE')}`,
    );
    this.logger.debug(
      `JWT_REFRESH_TOKEN_SECRET: ${this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET')}`,
    );
    this.logger.debug(
      `JWT_REFRESH_TOKEN_EXPIRE: ${this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRE')}`,
    );
  }

  async verifyRefreshToken(refreshToken: string) {
    this.logger.debug(`Verifying refresh token: ${refreshToken}`);
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });
      return payload;
    } catch (error) {
      this.logger.error(
        `Refresh token verification failed: ${error.message}`,
        error.stack,
      );
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRE'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRE'),
    });

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersService.updateRefreshToken(user.id, hashedRefreshToken);

    return {
      message: 'Login successful',
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(userId: number, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.refresh_token) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const isValid = await bcrypt.compare(refreshToken, user.refresh_token);
    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });

      const newAccessToken = this.jwtService.sign(
        { email: user.email, sub: user.id },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRE'),
        },
      );

      return {
        message: 'Token refreshed successfully',
        new_access_token: newAccessToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Refresh token expired or invalid');
    }
  }

  async logout(userId: number) {
    await this.usersService.updateRefreshToken(userId, null);
    return { message: 'Logout successful' };
  }
}
