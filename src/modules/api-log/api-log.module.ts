import { Module } from '@nestjs/common';
import { ApiLogService } from './api-log.service';
import { ApiLogController } from './api-log.controller';
import { GetListApiLogRepository, TotalApiLogRepository } from './repositories';

@Module({
  controllers: [ApiLogController],
  providers: [ApiLogService, GetListApiLogRepository, TotalApiLogRepository],
})
export class ApiLogModule {}
