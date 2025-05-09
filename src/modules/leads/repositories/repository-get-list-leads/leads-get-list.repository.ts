import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { LeadsGetListDto } from '../../dto';

@Injectable()
export class LeadsGetListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getList(dto: LeadsGetListDto): Promise<any> {
    const {
      lead_id = null,
      last_name = null,
      email = null,
      phone_number = null,
      created_at_from = null,
      created_at_to = null,
      updated_at_from = null,
      updated_at_to = null,
      lead_source = null,
      lead_stage = null,
      lead_status = null,
      page = 1,
      size = 10,
      sort = null,
    } = dto;

    const params = [
      lead_id,
      last_name,
      email,
      phone_number,
      created_at_from,
      created_at_to,
      updated_at_from,
      updated_at_to,
      lead_source,
      lead_stage,
      lead_status,
      page,
      size,
      sort,
    ];

    return this.spService.callProcedure('SP_LEADS_GET_LIST', params);
  }
}
