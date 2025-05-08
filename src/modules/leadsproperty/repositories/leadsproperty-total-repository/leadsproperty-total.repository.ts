/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, BadRequestException } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { LeadspropertyTotalDto } from '../../dto';

@Injectable()
export class LeadspropertyTotalRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getTotal(dto: LeadspropertyTotalDto): Promise<any> {
    const result = await this.spService.callProcedure(
      'SP_LEADSPROPERTY_TOTAL',
      [
        dto.lead_property_id || null,
        dto.lead_id || null,
        dto.lead_property_type || null,
        dto.address || null,
        dto.created_at_from || null,
        dto.created_at_to || null,
        dto.updated_at_from || null,
        dto.updated_at_to || null,
        dto['3d_outside_status'] || null,
        dto.lead_property_stage || null,
        dto.lead_property_status || null,
        dto.location_status || null,
      ],
    );

    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }

    return result;
  }
}
