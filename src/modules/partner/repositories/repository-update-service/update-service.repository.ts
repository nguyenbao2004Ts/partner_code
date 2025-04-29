/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UpdateServiceRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async updateService(
    id: number,
    dataCode: string | null,
    dataTitle: string,
    dataParentId: string,
    dataImage: string | null,
    dataDesc: string | null,
    referralName: string | null,
    referralEmail: string | null,
    referralPhone: string | null,
  ) {
    return this.spService.callProcedure('SP_UPDATE_SERVICE', [
      id,
      dataCode,
      dataTitle,
      dataParentId,
      dataImage,
      dataDesc,
      referralName,
      referralEmail,
      referralPhone,
    ]);
  }
}
