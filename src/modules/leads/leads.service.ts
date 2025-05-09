import { Injectable } from '@nestjs/common';
import { LeadsGetListRepository } from './repositories';
import { LeadsGetListDto } from './dto';

@Injectable()
export class LeadsService {
  constructor(private readonly getListRepo: LeadsGetListRepository) {}

  async getList(dto: LeadsGetListDto): Promise<any> {
    return this.getListRepo.getList(dto);
  }
}
