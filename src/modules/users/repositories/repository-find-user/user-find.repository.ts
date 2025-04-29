/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UserFindRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async findByEmail(email: string) {
    const result = await this.spService.callProcedure('sp_find_user_by_email', [
      email,
    ]);
    return result[0];
  }
}
