/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import {
  InsertAppConfigRepository,
  UpdateAppConfigRepository,
  DeleteAppConfigRepository,
  GetListAppConfigRepository,
  TotalListAppConfigRepository,
} from './repositories/index';
import {
  InsertAppConfigDto,
  UpdateAppConfigDto,
  GetListAppConfigDto,
} from './dto/index';

@Injectable()
export class AppConfigService {
  constructor(
    private readonly insertRepo: InsertAppConfigRepository,
    private readonly updateRepo: UpdateAppConfigRepository,
    private readonly deleteRepo: DeleteAppConfigRepository,
    private readonly getListRepo: GetListAppConfigRepository,
    private readonly totalRepo: TotalListAppConfigRepository,
  ) {}

  async insertAppConfig(dto: InsertAppConfigDto) {
    const { key, value, description } = dto;
    const result = await this.insertRepo.insertAppConfig(
      key,
      value,
      description,
    );
    return result;
  }

  async updateAppConfig(key: string, body: UpdateAppConfigDto) {
    const { value, description } = body;
    const result = await this.updateRepo.updateAppConfig(
      key,
      value,
      description,
    );
    return result;
  }

  async deleteAppConfig(key: string) {
    return await this.deleteRepo.deleteAppConfig(key);
  }

  async getListAppConfig(dto: GetListAppConfigDto) {
    const {
      key,
      created_at_from,
      created_at_to,
      updated_at_from,
      updated_at_to,
      page,
      size,
      sort,
    } = dto;

    return await this.getListRepo.getListAppConfig(
      key || '',
      created_at_from || '',
      created_at_to || '',
      updated_at_from || '',
      updated_at_to || '',
      page ?? 1,
      size ?? 10,
      sort || '',
    );
  }

  async getTotalAppConfig() {
    return await this.totalRepo.getTotalAppConfig();
  }
}
