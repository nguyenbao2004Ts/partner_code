import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';
import { GetListApiLogDto } from '../../dto';

@Injectable()
export class GetListApiLogRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async getList(dto: GetListApiLogDto): Promise<any> {
    const {
      id = null,
      name_log = null,
      create_date_from = null,
      create_date_to = null,
      page = 1,
      size = 10,
      sort = null,
    } = dto;

    const params = [
      id,
      name_log,
      create_date_from,
      create_date_to,
      page,
      size,
      sort,
    ];

    return this.spService.callProcedure('SP_API_LOG_GET_LIST', params);
  }
}
