import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import {
  LeadsDeleteRepository,
  LeadsGetListRepository,
  LeadsInsertRepository,
  LeadsTotalRepository,
  LeadsUpdateRepository,
} from './repositories';
@Module({
  controllers: [LeadsController],
  providers: [
    LeadsService,
    LeadsGetListRepository,
    LeadsInsertRepository,
    LeadsUpdateRepository,
    LeadsDeleteRepository,
    LeadsTotalRepository,
  ],
})
export class LeadsModule {}
