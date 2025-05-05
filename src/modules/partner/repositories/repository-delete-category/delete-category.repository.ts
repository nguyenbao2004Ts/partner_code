/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { BadRequestException, Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteCategoryRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteCategory(id: number) {
    const result = await this.spService.callProcedure('SP_DELETE_CATEGORY', [
      id,
    ]);
    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }
    return result;
  }
}
