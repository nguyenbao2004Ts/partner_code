import { Injectable } from '@nestjs/common';
import {
  LeadspropertyDeleteRepository,
  LeadspropertyGetListRepository,
  LeadspropertyInsertRepository,
  LeadspropertyTotalRepository,
  LeadspropertyUpdateRepository,
} from './repositories';
import {
  LeadspropertyGetListDto,
  LeadspropertyInsertDto,
  LeadspropertyTotalDto,
  LeadspropertyUpdateDto,
} from './dto';

@Injectable()
export class LeadspropertyService {
  constructor(
    private readonly getListRepo: LeadspropertyGetListRepository,
    private readonly insertRepo: LeadspropertyInsertRepository,
    private readonly updateRepo: LeadspropertyUpdateRepository,
    private readonly deleteRepo: LeadspropertyDeleteRepository,
    private readonly totalRepo: LeadspropertyTotalRepository,
  ) {}

  async getList(dto: LeadspropertyGetListDto): Promise<any> {
    return this.getListRepo.getList(dto);
  }

  async insert(dto: LeadspropertyInsertDto): Promise<any> {
    return this.insertRepo.insert(dto);
  }

  async update(
    lead_property_id: number,
    dto: LeadspropertyUpdateDto,
  ): Promise<{ message: string }> {
    return this.updateRepo.updateLeadProperty(
      lead_property_id,
      dto.lead_id,
      dto.lead_property_type,
      dto.location_elements ?? null,
      dto.full_address,
      dto.address ?? null,
      dto.city ?? null,
      dto.state ?? null,
      dto.postal_code ?? null,
      dto.country ?? null,
      dto.json_metadata ?? null,
      dto.lead_property_note ?? null,
      dto.json_address ?? null,
      dto.property_id ?? null,
      dto.longitude ?? null,
      dto.latitude ?? null,
      dto.ksplat_urls ?? null,
      dto.captured_video_urls ?? null,
      dto['3d_outside_status'] ?? null,
      dto.lead_property_stage ?? null,
      dto.lead_property_status ?? null,
      dto.lead_property_sf_id ?? null,
      dto.location_status ?? null,
    );
  }

  async delete(lead_property_id: string): Promise<{ message: string }> {
    return this.deleteRepo.delete(lead_property_id);
  }

  async getTotal(dto: LeadspropertyTotalDto): Promise<any> {
    return this.totalRepo.getTotal(dto);
  }
}
