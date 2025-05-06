import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/modules/users/entity/User';
import {
  UserCreateRepository,
  UserFindRepository,
  UserFindIdRepository,
  UpdateRefreshTokenRepository,
} from './repositories/index';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UserCreateRepository,
    UserFindRepository,
    UserFindIdRepository,
    UpdateRefreshTokenRepository,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
