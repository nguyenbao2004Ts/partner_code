import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { GetCategoryRepository } from './repositories/repository-get-category/get-category.repository';
import { GetServiceRepository } from './repositories/repository-get-service/get-service.repository';
import { GetPartnerRepository } from './repositories/repository-get-partner/get-partner.repository';
import { InsertCategoryRepository } from './repositories/repository-insert-category/insert-category.repository';
import { InsertServiceRepository } from './repositories/repository-insert-service/insert-service.repository';
import { InsertPartnerRepository } from './repositories/repository-insert-partner/insert-partner.repository';
import { UpdateCategoryRepository } from './repositories/repository-update-category/update-category.repository';
import { UpdateServiceRepository } from './repositories/repository-update-service/update-service.repository';
import { UpdatePartnerRepository } from './repositories/repository-update-partner/update-partner-repository';
import { DeleteCategoryRepository } from './repositories/repository-delete-category/delete-category.repository';
import { DeleteServiceRepository } from './repositories/repository-delete-service/delete-service.repository';
import { DeletePartnerRepository } from './repositories/repository-delete-partner/delete-partner.repository';

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
  ],
})
export class PartnerModule {}
