/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { GetListApiLogDto, TotalApiLogDto } from './dto';
import { GetListApiLogRepository, TotalApiLogRepository } from './repositories';

@Injectable()
export class ApiLogService {
  constructor(
    private readonly repo: GetListApiLogRepository,
    private readonly totalRepo: TotalApiLogRepository,
  ) {}

  async getList(dto: GetListApiLogDto) {
    return this.repo.getList(dto);
  }

  async getTotal(dto: TotalApiLogDto): Promise<number> {
    return this.totalRepo.getTotal(dto);
  }
}
