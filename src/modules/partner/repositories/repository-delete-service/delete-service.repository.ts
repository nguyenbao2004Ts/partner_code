/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteServiceRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteService(id: number) {
    return this.spService.callProcedure('SP_DELETE_SERVICE', [id]);
  }
}
