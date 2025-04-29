/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { GetCategoryListDto } from './dto/get-category-list.dto';
import { GetServiceListDto } from './dto/get-service-list.dto';
import { GetPartnerListDto } from './dto/get-partner-list.dto';
import { InsertCategoryDto } from './dto/insert-category.dto';
import { InsertServiceDto } from './dto/insert-service.dto';
import { InsertPartnerDto } from './dto/insert-partner.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import {
  GetCategoryRepository,
  GetServiceRepository,
  GetPartnerRepository,
  InsertCategoryRepository,
  InsertServiceRepository,
  InsertPartnerRepository,
  UpdateCategoryRepository,
  UpdateServiceRepository,
  UpdatePartnerRepository,
  DeleteCategoryRepository,
  DeleteServiceRepository,
  DeletePartnerRepository,
} from './repositories';
@Injectable()
@Injectable()
export class PartnerService {
  constructor(
    private readonly categoryRepo: GetCategoryRepository,
    private readonly serviceRepo: GetServiceRepository,
    private readonly partnerRepo: GetPartnerRepository,
    private readonly insertCategoryRepo: InsertCategoryRepository,
    private readonly insertServiceRepo: InsertServiceRepository,
    private readonly insertPartnerRepo: InsertPartnerRepository,
    private readonly updateCategoryRepo: UpdateCategoryRepository,
    private readonly updateServiceRepo: UpdateServiceRepository,
    private readonly updatePartnerRepo: UpdatePartnerRepository,
    private readonly deleteCategoryRepo: DeleteCategoryRepository,
    private readonly deleteServiceRepo: DeleteServiceRepository,
    private readonly deletePartnerRepo: DeletePartnerRepository,
  ) {}

  async getCategoryList(dto: GetCategoryListDto) {
    return this.categoryRepo.getCategoryList(
      dto.id || 'all',
      dto.name || 'all',
      dto.create_at_from,
      dto.create_at_to,
      dto.page || 1,
      dto.size || 10,
      dto.sort || 'ID,ASC',
    );
  }
  async getServiceList(dto: GetServiceListDto) {
    return this.serviceRepo.getServiceList(
      dto.id || 'all',
      dto.name || 'all',
      dto.name_category || 'all',
      dto.create_at_form,
      dto.create_at_to,
      dto.page || 1,
      dto.size || 10,
      dto.sort || 'ID,ASC',
    );
  }
  async getPartnerList(dto: GetPartnerListDto) {
    return this.partnerRepo.getPartnerList(
      dto.id || 'all',
      dto.name || 'all',
      dto.name_service || 'all',
      dto.name_category || 'all',
      dto.create_at_form,
      dto.create_at_to,
      dto.page || 1,
      dto.size || 10,
      dto.sort || 'ID,ASC',
    );
  }
  async insertCategory(dto: InsertCategoryDto) {
    return this.insertCategoryRepo.insertCategory(
      dto.data_code,
      dto.data_title,
      dto.data_image || null,
      dto.data_desc || null,
      dto.referral_name || null,
      dto.referral_email || null,
      dto.referral_phone || null,
    );
  }
  async insertService(dto: InsertServiceDto) {
    return this.insertServiceRepo.insertService(
      dto.data_code,
      dto.data_title,
      dto.parent_category_id,
      dto.data_image || null,
      dto.data_desc || null,
      dto.referral_name || null,
      dto.referral_email || null,
      dto.referral_phone || null,
    );
  }
  async insertPartner(dto: InsertPartnerDto) {
    return this.insertPartnerRepo.insertPartner(
      dto.data_code,
      dto.data_title,
      dto.parent_service_id,
      dto.data_image || null,
      dto.data_desc || null,
      dto.referral_name || null,
      dto.referral_email || null,
      dto.referral_phone || null,
    );
  }
  async updateCategory(dto: UpdateCategoryDto) {
    return this.updateCategoryRepo.updateCategory(
      dto.id,
      dto.data_code || null,
      dto.data_title,
      dto.data_image || null,
      dto.data_desc || null,
      dto.referral_name || null,
      dto.referral_email || null,
      dto.referral_phone || null,
    );
  }
  async updateService(dto: UpdateServiceDto) {
    return this.updateServiceRepo.updateService(
      dto.id,
      dto.data_code || null,
      dto.data_title,
      dto.data_parent_id || '',
      dto.data_image || null,
      dto.data_desc || null,
      dto.referral_name || null,
      dto.referral_email || null,
      dto.referral_phone || null,
    );
  }
  async updatePartner(dto: UpdatePartnerDto) {
    return this.updatePartnerRepo.updatePartner(
      dto.id,
      dto.data_code || null,
      dto.data_title,
      dto.data_parent_id || '',
      dto.data_image || null,
      dto.data_desc || null,
      dto.referral_name || null,
      dto.referral_email || null,
      dto.referral_phone || null,
    );
  }
  async deleteCategory(id: number) {
    return this.deleteCategoryRepo.deleteCategory(id);
  }
  async deleteService(id: number) {
    return this.deleteServiceRepo.deleteService(id);
  }
  async deletePartner(id: number) {
    return this.deletePartnerRepo.deletePartner(id);
  }
}
