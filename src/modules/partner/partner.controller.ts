/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('partner/v1')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get('category')
  @UseGuards(AuthGuard('jwt'))
  async getCategoryList(@Query('name') name: string = 'all') {
    return this.partnerService.getCategoryList(name);
  }
  @Get('service')
  @UseGuards(AuthGuard('jwt'))
  async getServiceList(
    @Query('parentId') parentId: string = 'all',
    @Query('name') name: string = 'all',
  ) {
    return this.partnerService.getServiceList(parentId, name);
  }
}
