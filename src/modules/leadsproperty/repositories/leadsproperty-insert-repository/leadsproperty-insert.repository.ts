/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { LeadspropertyInsertDto } from '../../dto';

@Injectable()
export class LeadspropertyInsertRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async insert(dto: LeadspropertyInsertDto): Promise<{ message: string }> {
    const jsonMetadataStr = JSON.stringify(dto.json_metadata || {});
    const jsonAddressStr = JSON.stringify(dto.json_address || {});
    const ksplatUrlsStr = JSON.stringify(dto.ksplat_urls || []);
    const captured_video_urlsStr = JSON.stringify(
      dto.captured_video_urls || [],
    );
    const inputParams = [
      dto.lead_id,
      dto.lead_property_type,
      dto.location_elements,
      dto.full_address,
      dto.address,
      dto.city,
      dto.state,
      dto.postal_code,
      dto.country,
      jsonMetadataStr,
      dto.lead_property_note || null,
      jsonAddressStr,
      dto.property_id || null,
      dto.longitude || null,
      dto.latitude || null,
      ksplatUrlsStr || null,
      captured_video_urlsStr || null,
      dto._3d_outside_status || null,
      dto.lead_property_stage || null,
      dto.lead_property_status || null,
      dto.lead_property_sf_id || null,
      dto.location_status || null,
    ];

    const result = await this.spService.callProcedureWithOutParams(
      'SP_LEADSPROPERTY_INSERT_V3',
      inputParams,
      ['p_error_code', 'p_error_message'],
    );

    switch (result.p_error_code) {
      case 200:
        return { message: result.p_error_message };
      case 400:
        throw new BadRequestException(result.p_error_message);
      case 404:
        throw new NotFoundException(result.p_error_message);
      case 409:
        throw new ConflictException(result.p_error_message);
      default:
        throw new BadRequestException('Unknown error');
    }
  }
}
