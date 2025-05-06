/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UpdateAppConfigRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async updateAppConfig(
    key: string,
    value: string,
    description?: string,
  ): Promise<{ error_code: number; error_message: string }> {
    const result = await this.spService.callProcedureWithOutParams(
      'sp_update_app_config',
      [key, value, description || null],
      ['p_error_code', 'p_error_message'],
    );

    if (result.p_error_code !== 0) {
      throw new BadRequestException(result.p_error_message);
    }

    return {
      error_code: result.p_error_code,
      error_message: result.p_error_message,
    };
  }
}
