/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/sp.service';

@Injectable()
export class PartnerRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getCategoryList(
    searchId = 'all',
    searchName = 'all',
    searchFromDate: string | null = null,
    searchToDate: string | null = null,
    sort = 'ID,ASC',
    page = 1,
    pageSize = 10,
  ) {
    return this.spService.callProcedure('SP_GET_CATEGORY_LIST', [
      searchId,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      page,
      pageSize,
    ]);
  }

  async getServiceList(
    searchId = 'all',
    searchNameCategory = 'all',
    searchName = 'all',
    searchFromDate: string | null = null,
    searchToDate: string | null = null,
    sort = 'ID ASC',
    page = 1,
    pageSize = 10,
  ) {
    return this.spService.callProcedure('SP_GET_SERVICE_LIST', [
      searchId,
      searchNameCategory,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      page,
      pageSize,
    ]);
  }

  async getPartnerList(
    searchId = 'all',
    searchNameCategory = 'all',
    searchNameService = 'all',
    searchName = 'all',
    searchFromDate: string | null = null,
    searchToDate: string | null = null,
    sort = 'ID ASC',
    page = 1,
    pageSize = 10,
  ) {
    return this.spService.callProcedure('SP_GET_PARTNER_LIST', [
      searchId,
      searchNameCategory,
      searchNameService,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      page,
      pageSize,
    ]);
  }
}
