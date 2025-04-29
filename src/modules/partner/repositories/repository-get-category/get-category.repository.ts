/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class GetCategoryRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getCategoryList(
    searchId = 'all',
    searchName = 'all',
    searchFromDate: string | null = null,
    searchToDate: string | null = null,
    page = 1,
    pageSize = 10,
    sort = 'ID,ASC',
  ) {
    return this.spService.callProcedure('SP_GET_CATEGORY_LIST', [
      searchId,
      searchName,
      searchFromDate,
      searchToDate,
      page,
      pageSize,
      sort,
    ]);
  }
}
