/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, BadRequestException } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteAppConfigRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteAppConfig(
    key: string,
  ): Promise<{ error_code: number; error_message: string }> {
    const result = await this.spService.callProcedureWithOutParams(
      'sp_delete_app_config',
      [key],
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
