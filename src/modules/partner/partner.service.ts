/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './reponsitory/partner.repository';

@Injectable()
export class PartnerService {
  constructor(private readonly partnerRepo: PartnerRepository) {}

  async getCategoryList(name: string) {
    return this.partnerRepo.getCategoryList(name);
  }
  async getServiceList(parentId: string, name: string) {
    return this.partnerRepo.getServiceList(parentId, name);
  }
}
