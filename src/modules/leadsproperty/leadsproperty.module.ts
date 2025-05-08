import { Module } from '@nestjs/common';
import { LeadspropertyService } from './leadsproperty.service';
import { LeadspropertyController } from './leadsproperty.controller';
import {
  LeadspropertyGetListRepository,
  LeadspropertyInsertRepository,
  LeadspropertyUpdateRepository,
  LeadspropertyDeleteRepository,
  LeadspropertyTotalRepository,
} from './repositories';

@Module({
  controllers: [LeadspropertyController],
  providers: [
    LeadspropertyService,
    LeadspropertyGetListRepository,
    LeadspropertyInsertRepository,
    LeadspropertyUpdateRepository,
    LeadspropertyDeleteRepository,
    LeadspropertyTotalRepository,
  ],
})
export class LeadspropertyModule {}
