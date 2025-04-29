/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class InsertPartnerRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async insertPartner(
    dataCode: string,
    dataTitle: string,
    parentServiceId: string,
    dataImage: string | null,
    dataDesc: string | null,
    referralName: string | null,
    referralEmail: string | null,
    referralPhone: string | null,
  ) {
    return this.spService.callProcedure('SP_INSERT_PARTNER', [
      dataCode,
      dataTitle,
      parentServiceId,
      dataImage,
      dataDesc,
      referralName,
      referralEmail,
      referralPhone,
    ]);
  }
}
