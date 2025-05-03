/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class GetListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getList(
    data_type: string,
    id = 'all',
    name = 'all',
    service_name = 'all',
    category_name = 'all',
    fromDate: string | null = null,
    toDate: string | null = null,
    page = 1,
    size = 10,
    sort = 'ID,ASC',
  ) {
    return this.spService.callProcedure('SP_GET_LIST', [
      data_type,
      id,
      name,
      service_name,
      category_name,
      fromDate,
      toDate,
      page,
      size,
      sort,
    ]);
  }
}
