/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteCategoryRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteCategory(id: number) {
    return this.spService.callProcedure('SP_DELETE_CATEGORY', [id]); // Gọi stored procedure
  }
}
