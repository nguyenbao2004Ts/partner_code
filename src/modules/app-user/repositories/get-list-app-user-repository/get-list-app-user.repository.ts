/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class GetListAppUserRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getListAppUser(
    user_email: string | null,
    created_at_from: string | null,
    created_at_to: string | null,
    updated_at_from: string | null,
    updated_at_to: string | null,
    page: number,
    size: number,
    sort: string | null,
  ) {
    return await this.spService.callProcedure('SP_APP_USER_GET_LIST', [
      user_email,
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
