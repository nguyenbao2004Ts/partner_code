/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PartnerService } from './partner.service';
import {
  GetCategoryListDto,
  GetServiceListDto,
  GetPartnerListDto,
  InsertCategoryDto,
  InsertServiceDto,
  InsertPartnerDto,
  UpdateCategoryDto,
  UpdateServiceDto,
  UpdatePartnerDto,
} from './dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiParam,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
@ApiBearerAuth('access-token')
@Controller('partner/v1')
@ApiTags('Partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/get-category-list')
  @ApiOperation({ summary: 'Get a list of categories' })
  @ApiResponse({
    status: 200,
    description: 'List of categories retrieved successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async getCategoryList(@Query() query: GetCategoryListDto) {
    return this.partnerService.getCategoryList(query);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/get-service-list')
  @ApiOperation({ summary: 'Get a list of services' })
  @ApiResponse({
    status: 200,
    description: 'List of services retrieved successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async getServiceList(@Query() query: GetServiceListDto) {
    return this.partnerService.getServiceList(query);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/get-partner-list')
  @ApiOperation({ summary: 'Get a list of partners' })
  @ApiResponse({
    status: 200,
    description: 'List of partners retrieved successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async getPartnerList(@Query() query: GetPartnerListDto) {
    return this.partnerService.getPartnerList(query);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-category')
  @ApiOperation({ summary: 'Insert a new category' })
  @ApiResponse({ status: 201, description: 'Category successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertCategoryDto })
  async insertCategory(@Body() body: InsertCategoryDto) {
    return this.partnerService.insertCategory(body);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-service')
  @ApiOperation({ summary: 'Insert a new service' })
  @ApiResponse({ status: 201, description: 'Service successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertServiceDto })
  async insertService(@Body() body: InsertServiceDto) {
    return this.partnerService.insertService(body);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-partner')
  @ApiOperation({ summary: 'Insert a new partner' })
  @ApiResponse({ status: 201, description: 'Partner successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertPartnerDto })
  async insertPartner(@Body() body: InsertPartnerDto) {
    return this.partnerService.insertPartner(body);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/category/:id')
  @ApiOperation({ summary: 'Update a category' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the category to update',
  })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiOkResponse({ description: 'Category updated successfully' })
  async updateCategory(
    @Param('id') id: number,
    @Body() body: UpdateCategoryDto,
  ) {
    return this.partnerService.updateCategory({ ...body, id });
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/service/:id')
  @ApiOperation({ summary: 'Update a service' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the service to update',
  })
  @ApiBody({ type: UpdateServiceDto })
  @ApiOkResponse({ description: 'Service updated successfully' })
  async updateService(@Param('id') id: number, @Body() body: UpdateServiceDto) {
    return this.partnerService.updateService({ ...body, id });
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/partner/:id')
  @ApiOperation({ summary: 'Update a partner' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the partner to update',
  })
  @ApiBody({ type: UpdatePartnerDto })
  @ApiOkResponse({ description: 'Partner updated successfully' })
  async updatePartner(@Param('id') id: number, @Body() body: UpdatePartnerDto) {
    return this.partnerService.updatePartner({ ...body, id });
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/category/:id')
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the category to delete',
  })
  @ApiOkResponse({ description: 'Category deleted successfully' })
  async deleteCategory(@Param('id') id: number) {
    return this.partnerService.deleteCategory(id);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/service/:id')
  @ApiOperation({ summary: 'Delete a service by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the service to delete',
  })
  @ApiOkResponse({ description: 'Service deleted successfully' })
  async deleteService(@Param('id') id: number) {
    return this.partnerService.deleteService(id);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/partner/:id')
  @ApiOperation({ summary: 'Delete a partner by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the partner to delete',
  })
  @ApiOkResponse({ description: 'Partner deleted successfully' })
  async deletePartner(@Param('id') id: number) {
    return this.partnerService.deletePartner(id);
  }
}
