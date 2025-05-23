import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
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
  GetListRepository,
  InsertListRepository,
  UpdateListRepository,
  DeleteListRepository,
  TotalRepository,
} from './repositories';

@Module({
  controllers: [PartnerController],
  providers: [
    PartnerService,
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
    GetListRepository,
    InsertListRepository,
    UpdateListRepository,
    DeleteListRepository,
    TotalRepository,
  ],
})
export class PartnerModule {}
