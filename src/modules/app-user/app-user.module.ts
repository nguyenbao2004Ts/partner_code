import { Module } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { AppUserController } from './app-user.controller';
import {
  DeleteAppUserRepository,
  GetListAppUserRepository,
  TotalAppUserRepository,
  UpdateAppUserRepository,
} from './repositories/index';

@Module({
  controllers: [AppUserController],
  providers: [
    AppUserService,
    GetListAppUserRepository,
    UpdateAppUserRepository,
    DeleteAppUserRepository,
    TotalAppUserRepository,
  ],
})
export class AppUserModule {}
