/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class InsertServiceRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async insertService(
    dataCode: string,
    dataTitle: string,
    parentCategoryId: string,
    dataImage: string | null,
    dataDesc: string | null,
    referralName: string | null,
    referralEmail: string | null,
    referralPhone: string | null,
  ) {
    return this.spService.callProcedure('SP_INSERT_SERVICE', [
      dataCode,
      dataTitle,
      parentCategoryId,
      dataImage,
      dataDesc,
      referralName,
      referralEmail,
      referralPhone,
    ]);
  }
}
