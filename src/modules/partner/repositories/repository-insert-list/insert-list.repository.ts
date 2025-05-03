/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class InsertListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async insertList(
    data_type: string,
    data_code: string,
    data_title: string,
    parent_id: string | null,
    data_image: string | null,
    data_desc: string | null,
    referral_name: string | null,
    referral_email: string | null,
    referral_phone: string | null,
  ) {
    return this.spService.callProcedure('SP_INSERT', [
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
  }
}
