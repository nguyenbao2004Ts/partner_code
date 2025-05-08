/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { TotalDto } from '../../dto';

@Injectable()
export class TotalRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getTotalByType(dto: TotalDto): Promise<any> {
    const {
      data_type,
      search_id,
      search_name,
      search_name_service,
      search_name_category,
      search_from_date,
      search_to_date,
    } = dto;

    const result = await this.spService.callProcedure(
      'SP_COMMON_METADATA_PARTNER_TOTAL',
      [
        data_type,
        search_id || null,
        search_name || null,
        search_name_service || null,
        search_name_category || null,
        search_from_date || null,
        search_to_date || null,
      ],
    );

    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }
    return result;
  }
}
