/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { BadRequestException, Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UpdatePartnerRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async updatePartner(
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
    const result = await this.spService.callProcedure('SP_UPDATE_PARTNER', [
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
    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }
    return result;
  }
}
