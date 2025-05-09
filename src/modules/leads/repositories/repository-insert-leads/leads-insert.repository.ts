/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { LeadsInsertDto } from '../../dto';

@Injectable()
export class LeadsInsertRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async insert(dto: LeadsInsertDto): Promise<{ message: string }> {
    const jsonMetadataStr = JSON.stringify(dto.json_moredata || {});
    const inputParams = [
      dto.first_name,
      dto.last_name,
      dto.email,
      dto.phone_number,
      dto.company_name,
      dto.job_title,
      dto.lead_source,
      dto.lead_stage,
      dto.lead_status,
      jsonMetadataStr,
      dto.salesforce_lead_id,
    ];

    const result = await this.spService.callProcedureWithOutParams(
      'SP_LEADS_INSERT_V3',
      inputParams,
      ['p_error_code', 'p_error_message'],
    );

    switch (result.p_error_code) {
      case 200:
        return { message: result.p_error_message };
      case 400:
        throw new BadRequestException(result.p_error_message);
      default:
        throw new BadRequestException('Unknown error');
    }
  }
}
