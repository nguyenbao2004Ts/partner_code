/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class GetListAppConfigRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getListAppConfig(
    key: string,
    created_at_from: string,
    created_at_to: string,
    updated_at_from: string,
    updated_at_to: string,
    page: number,
    size: number,
    sort: string,
  ) {
    return await this.spService.callProcedure('sp_get_list_app_config', [
      key,
      created_at_from,
      created_at_to,
      updated_at_from,
      updated_at_to,
      page,
      size,
      sort,
    ]);
  }
}
