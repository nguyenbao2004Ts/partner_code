/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './reponsitory/partner.repository';

@Injectable()
export class PartnerService {
  constructor(private readonly partnerRepo: PartnerRepository) {}

  async getCategoryList(
    searchId: string,
    searchName: string,
    searchFromDate: string | null,
    searchToDate: string | null,
    sortColumn: string,
    sortDirection: string,
    page: number,
    pageSize: number,
  ) {
    const sort = `${sortColumn},${sortDirection}`;
    return this.partnerRepo.getCategoryList(
      searchId,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      page,
      pageSize,
    );
  }

  async getServiceList(
    searchId: string,
    searchNameCategory: string,
    searchName: string,
    searchFromDate: string | null,
    searchToDate: string | null,
    sort: string,
    page: number,
    pageSize: number,
  ) {
    return this.partnerRepo.getServiceList(
      searchId,
      searchNameCategory,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      page,
      pageSize,
    );
  }

  async getPartnerList(
    searchId: string,
    searchNameCategory: string,
    searchNameService: string,
    searchName: string,
    searchFromDate: string | null,
    searchToDate: string | null,
    sort: string,
    page: number,
    pageSize: number,
  ) {
    return this.partnerRepo.getPartnerList(
      searchId,
      searchNameCategory,
      searchNameService,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      page,
      pageSize,
    );
  }
}
