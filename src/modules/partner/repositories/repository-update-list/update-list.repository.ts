/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { BadRequestException, Injectable } from '@nestjs/common';
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
    const result = await this.spService.callProcedure('SP_UPDATE', [
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
    ]);
    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }
    return result;
  }
}
