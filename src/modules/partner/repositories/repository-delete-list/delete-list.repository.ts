/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteItem(id: number) {
    return this.spService.callProcedure('SP_DELETE', [id]);
  }
}
