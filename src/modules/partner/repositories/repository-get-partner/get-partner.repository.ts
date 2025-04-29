/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class GetPartnerRepository {
  constructor(private readonly spService: StoredProcedureService) {}
  async getPartnerList(
    searchId = 'all',
    searchName = 'all',
    searchNameService = 'all',
    searchNameCategory = 'all',
    searchFromDate: string | null = null,
    searchToDate: string | null = null,
    page = 1,
    pageSize = 10,
    sort = 'ID,ASC',
  ) {
    return this.spService.callProcedure('SP_GET_PARTNER_LIST', [
      searchId,
      searchName,
      searchNameService,
      searchNameCategory,
      searchFromDate,
      searchToDate,
      page,
      pageSize,
      sort,
    ]);
  }
}
