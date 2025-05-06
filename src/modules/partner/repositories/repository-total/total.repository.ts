/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class TotalRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getTotalByType(data_type: string): Promise<any> {
    const result = await this.spService.callProcedure('SP_TOTAL', [data_type]);
    if (result?.[0]?.ErrorMessage) {
      throw new BadRequestException(result[0].ErrorMessage);
    }
    return result;
  }
}
