import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { AppConfigController } from './app-config.controller';
import {
  InsertAppConfigRepository,
  UpdateAppConfigRepository,
  DeleteAppConfigRepository,
  GetListAppConfigRepository,
  TotalListAppConfigRepository,
} from './repositories/index';

@Module({
  controllers: [AppConfigController],
  providers: [
    AppConfigService,
    InsertAppConfigRepository,
    UpdateAppConfigRepository,
    DeleteAppConfigRepository,
    GetListAppConfigRepository,
    TotalListAppConfigRepository,
  ],
})
export class AppConfigModule {}
