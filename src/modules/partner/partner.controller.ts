/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Query } from '@nestjs/common';
import { PartnerService } from './partner.service';
// import { AuthGuard } from '@nestjs/passport';

@Controller('partner/v1')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get('categories')
  async getCategories(
    @Query('searchId') searchId = 'all',
    @Query('searchName') searchName = 'all',
    @Query('searchFromDate') searchFromDate: string | null = null,
    @Query('searchToDate') searchToDate: string | null = null,
    @Query('sortColumn') sortColumn = 'ID',
    @Query('sortDirection') sortDirection = 'ASC',
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
  ) {
    return this.partnerService.getCategoryList(
      searchId,
      searchName,
      searchFromDate,
      searchToDate,
      sortColumn,
      sortDirection,
      Number(page),
      Number(pageSize),
    );
  }

  @Get('services')
  async getServices(
    @Query('searchId') searchId = 'all',
    @Query('searchNameCategory') searchNameCategory = 'all',
    @Query('searchName') searchName = 'all',
    @Query('searchFromDate') searchFromDate: string | null = null,
    @Query('searchToDate') searchToDate: string | null = null,
    @Query('sort') sort = 'ID ASC',
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
  ) {
    return this.partnerService.getServiceList(
      searchId,
      searchNameCategory,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      Number(page),
      Number(pageSize),
    );
  }

  @Get('partners')
  async getPartners(
    @Query('searchId') searchId = 'all',
    @Query('searchNameCategory') searchNameCategory = 'all',
    @Query('searchNameService') searchNameService = 'all',
    @Query('searchName') searchName = 'all',
    @Query('searchFromDate') searchFromDate: string | null = null,
    @Query('searchToDate') searchToDate: string | null = null,
    @Query('sort') sort = 'ID ASC',
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
  ) {
    return this.partnerService.getPartnerList(
      searchId,
      searchNameCategory,
      searchNameService,
      searchName,
      searchFromDate,
      searchToDate,
      sort,
      Number(page),
      Number(pageSize),
    );
  }
}
