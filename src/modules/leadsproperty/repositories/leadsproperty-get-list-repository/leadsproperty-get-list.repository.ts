import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { LeadspropertyGetListDto } from '../../dto';

@Injectable()
export class LeadspropertyGetListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getList(dto: LeadspropertyGetListDto): Promise<any> {
    const {
      lead_property_id = null,
      lead_id = null,
      lead_property_type = null,
      address = null,
      created_at_from = null,
      created_at_to = null,
      updated_at_from = null,
      updated_at_to = null,
      outside_status = null,
      lead_property_stage = null,
      lead_property_status = null,
      location_status = null,
      page = 1,
      size = 10,
      sort = null,
    } = dto;

    const params = [
      lead_property_id,
      lead_id,
      lead_property_type,
      address,
      created_at_from,
      created_at_to,
      updated_at_from,
      updated_at_to,
      outside_status,
      lead_property_stage,
      lead_property_status,
      location_status,
      page,
      size,
      sort,
    ];

    return this.spService.callProcedure('SP_LEADSPROPERTY_GET_LIST', params);
  }
}
