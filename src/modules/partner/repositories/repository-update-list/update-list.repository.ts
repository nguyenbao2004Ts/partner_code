/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UpdateListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async updateList(
    id: number,
    data_type: string,
    data_code: string | null,
    data_title: string,
    parent_id: string | null,
    data_image: string | null,
    data_desc: string | null,
    referral_name: string | null,
    referral_email: string | null,
    referral_phone: string | null,
  ) {
    const result = await this.spService.callProcedureWithOutParams(
      'SP_COMMON_METADATA_PARTNER_UPDATE',
      [
        id,
        data_type,
        data_code,
        data_title,
        parent_id,
        data_image,
        data_desc,
        referral_name,
        referral_email,
        referral_phone,
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
      case 409:
        throw new ConflictException(result.p_error_message);
      default:
        throw new BadRequestException('Unknown error');
    }
  }
}
