/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeletePartnerRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deletePartner(id: number) {
    return this.spService.callProcedure('SP_DELETE_PARTNER', [id]);
  }
}
