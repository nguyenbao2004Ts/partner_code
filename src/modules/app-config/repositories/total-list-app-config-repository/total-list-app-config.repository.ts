/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class TotalListAppConfigRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getTotalAppConfig(): Promise<{ total: number }> {
    const result = await this.spService.callProcedure('sp_total_app_config');
    return result[0];
  }
}
