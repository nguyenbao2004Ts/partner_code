/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, BadRequestException } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { LeadsTotalDto } from '../../dto';

@Injectable()
export class LeadsTotalRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getTotal(dto: LeadsTotalDto): Promise<any> {
    const result = await this.spService.callProcedure('SP_LEADS_TOTAL', [
      dto.lead_id || null,
      dto.last_name || null,
      dto.email || null,
      dto.phone_number || null,
      dto.created_at_from || null,
      dto.created_at_to || null,
      dto.updated_at_from || null,
      dto.updated_at_to || null,
      dto.lead_source || null,
      dto.lead_stage || null,
      dto.lead_status || null,
    ]);

    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }

    return result;
  }
}
