/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class LeadspropertyUpdateRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async updateLeadProperty(
    lead_property_id: number,
    lead_id: number,
    lead_property_type: string,
    location_elements: string | null,
    full_address: string,
    address: string | null,
    city: string | null,
    state: string | null,
    postal_code: string | null,
    country: string | null,
    json_metadata: string | null,
    lead_property_note: string | null,
    json_address: string | null,
    property_id: number | null,
    longitude: number | null,
    latitude: number | null,
    ksplat_urls: Array<string> | null,
    captured_video_urls: Array<string> | null,
    outside_status: number | null,
    lead_property_stage: string | null,
    lead_property_status: string | null,
    lead_property_sf_id: string | null,
    location_status: string | null,
  ): Promise<{ message: string }> {
    const jsonMetadataStr = JSON.stringify(json_metadata || {});
    const jsonAddressStr = JSON.stringify(json_address || {});
    const ksplatUrlsStr = JSON.stringify(ksplat_urls || []);
    const capturedVideoUrlsStr = JSON.stringify(captured_video_urls || []);

    const result = await this.spService.callProcedureWithOutParams(
      'SP_LEADSPROPERTY_UPDATE',
      [
        lead_property_id,
        lead_id,
        lead_property_type,
        location_elements,
        full_address,
        address,
        city,
        state,
        postal_code,
        country,
        jsonMetadataStr,
        lead_property_note,
        jsonAddressStr,
        property_id,
        longitude,
        latitude,
        ksplatUrlsStr,
        capturedVideoUrlsStr,
        outside_status,
        lead_property_stage,
        lead_property_status,
        lead_property_sf_id,
        location_status,
      ],
      ['p_error_code', 'p_error_message'],
    );

    switch (result.p_error_code) {
      case 200:
        return { message: result.p_error_message };
      case 400:
        throw new BadRequestException(result.p_error_message);
      case 404:
        throw new NotFoundException(result.p_error_message);
      default:
        throw new BadRequestException(result.p_error_message);
    }
  }
}
