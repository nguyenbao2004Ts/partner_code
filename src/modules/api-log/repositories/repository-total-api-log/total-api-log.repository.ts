/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { TotalApiLogDto } from '../../dto';
@Injectable()
export class TotalApiLogRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getTotal(dto: TotalApiLogDto): Promise<number> {
    const { id, name_log, create_date_from, create_date_to } = dto;

    const params = [
      id ?? null,
      name_log ?? null,
      create_date_from ?? null,
      create_date_to ?? null,
    ];

    const result = await this.spService.callProcedure(
      'SP_API_LOG_TOTAL',
      params,
    );
    return result?.[0]?.total ?? 0;
  }
}
