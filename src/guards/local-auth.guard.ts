/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err: any, user: any, info: any) {
    if (err) {
      throw err;
    }
    if (!user) {
      throw new UnauthorizedException(
        info?.message || 'Wrong email or password',
      );
    }
    return user;
  }
}
