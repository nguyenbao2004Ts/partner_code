/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/sp.service';

@Injectable()
export class PartnerRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getCategoryList(name: string = 'all') {
    return this.spService.callProcedure('SP_GET_CATEGORY_LIST', [name]);
  }
  async getServiceList(parentId: string = 'all', name: string = 'all') {
    return this.spService.callProcedure('SP_GET_SERVICE_LIST', [
      parentId,
      name,
    ]);
  }
}
