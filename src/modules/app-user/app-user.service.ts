/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import {
  DeleteAppUserRepository,
  GetListAppUserRepository,
  UpdateAppUserRepository,
  TotalAppUserRepository,
} from './repositories/index';
import { GetListAppUserDto, UpdateAppUserDto } from './dto/index';
@Injectable()
export class AppUserService {
  constructor(
    private readonly userRepo: GetListAppUserRepository,
    private readonly updateRepo: UpdateAppUserRepository,
    private readonly deleteRepo: DeleteAppUserRepository,
    private readonly totalUserRepo: TotalAppUserRepository,
  ) {}

  async getListAppUser(dto: GetListAppUserDto) {
    const {
      user_email,
      created_at_from,
      created_at_to,
      updated_at_from,
      updated_at_to,
      page = 1,
      size = 10,
      sort = 'created_at,desc',
    } = dto;

    return await this.userRepo.getListAppUser(
      user_email ?? null,
      created_at_from ?? null,
      created_at_to ?? null,
      updated_at_from ?? null,
      updated_at_to ?? null,
      page,
      size,
      sort ?? null,
    );
  }

  async updateAppUser(dto: UpdateAppUserDto) {
    return await this.updateRepo.updateAppUser(
      dto.user_email,
      dto.user_firstname,
      dto.user_lastname,
      dto.user_status,
      dto.phone_number,
    );
  }

  async deleteAppUser(email: string) {
    return await this.deleteRepo.deleteAppUser(email);
  }

  async getTotalAppUser() {
    return await this.totalUserRepo.getTotalAppUser();
  }
}
