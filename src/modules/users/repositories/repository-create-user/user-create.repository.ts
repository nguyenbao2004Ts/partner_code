/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class UserCreateRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async createUser(username: string, email: string, password: string) {
    return await this.spService.callProcedure('SP_USER_INSERT', [
      username,
      email,
      password,
    ]);
  }
}
