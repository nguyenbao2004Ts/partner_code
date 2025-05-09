import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { LeadsGetListRepository } from './repositories';
@Module({
  controllers: [LeadsController],
  providers: [LeadsService, LeadsGetListRepository],
})
export class LeadsModule {}
