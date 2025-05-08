/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UpdateRefreshTokenRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async updateRefreshToken(userId: number, refreshToken: string | null) {
    return await this.spService.callProcedure('SP_UPDATE_REFRESH_TOKEN', [
      userId,
      refreshToken,
    ]);
  }
}
