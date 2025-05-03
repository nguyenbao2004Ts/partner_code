/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
  NotFoundException,
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
  GetListDto,
  InsertListDto,
  UpdateListDto,
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
    const data = await this.partnerService.getCategoryList(query);
    if (!data || data.length === 0) {
      throw new NotFoundException('No categories found');
    }
    return {
      message: 'Categories retrieved successfully',
      data: data,
    };
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
    const data = await this.partnerService.getServiceList(query);
    if (!data || data.length === 0) {
      throw new NotFoundException('No service found');
    }
    return {
      message: 'Services retrieved successfully',
      data: data,
    };
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
    const data = await this.partnerService.getPartnerList(query);
    if (!data || data.length === 0) {
      throw new NotFoundException('No partner found');
    }
    return {
      message: 'Partners retrieved successfully',
      data: data,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-category')
  @ApiOperation({ summary: 'Insert a new category' })
  @ApiResponse({ status: 201, description: 'Category successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertCategoryDto })
  async insertCategory(@Body() body: InsertCategoryDto) {
    const data = await this.partnerService.insertCategory(body);
    return {
      message: 'Category created successfully',
      data: data,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-service')
  @ApiOperation({ summary: 'Insert a new service' })
  @ApiResponse({ status: 201, description: 'Service successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertServiceDto })
  async insertService(@Body() body: InsertServiceDto) {
    const data = await this.partnerService.insertService(body);
    return {
      message: 'Service created successfully',
      data: data,
    };
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-partner')
  @ApiOperation({ summary: 'Insert a new partner' })
  @ApiResponse({ status: 201, description: 'Partner successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertPartnerDto })
  async insertPartner(@Body() body: InsertPartnerDto) {
    const data = await this.partnerService.insertPartner(body);
    return {
      message: 'Partner created successfully',
      data: data,
    };
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
    const data = await this.partnerService.updateCategory({ ...body, id });
    return {
      data: data,
    };
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
    const data = await this.partnerService.updateService({ ...body, id });
    return {
      data: data,
    };
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
    const data = await this.partnerService.updatePartner({ ...body, id });
    return {
      data: data,
    };
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
    await this.partnerService.deleteCategory(id);
    return {
      message: 'Category deleted successfully',
    };
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
    await this.partnerService.deleteService(id);
    return {
      message: 'Service deleted successfully',
    };
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
    await this.partnerService.deletePartner(id);
    return {
      message: 'Partner deleted successfully',
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/get-list')
  @ApiOperation({ summary: 'Get list by type (category, service, partner)' })
  @ApiResponse({ status: 200, description: 'List retrieved successfully' })
  @ApiResponse({ status: 404, description: 'No data found' })
  async getList(@Query() query: GetListDto) {
    const data = await this.partnerService.getList(query);
    if (!data || data.length === 0) {
      throw new NotFoundException('No data found for the given query');
    }
    return {
      message: 'List retrieved successfully',
      data,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert-list')
  @ApiOperation({
    summary: 'Insert new metadata (category, service, or partner)',
  })
  @ApiResponse({ status: 201, description: 'Insert successful' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertListDto })
  async insertList(@Body() body: InsertListDto) {
    const data = await this.partnerService.insertList(body);
    return {
      message: 'Data inserted successfully',
      data,
    };
  }

  @Patch('/list/:id')
  @ApiOperation({ summary: 'Update a category, service, or partner' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the item to update',
  })
  @ApiBody({ type: UpdateListDto })
  @ApiOkResponse({ description: 'Item updated successfully' })
  async updateList(@Param('id') id: number, @Body() body: UpdateListDto) {
    const data = await this.partnerService.updateList({ ...body, id });
    return {
      data,
    };
  }

  @Delete('/list/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a metadata partner by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the category/service/partner to delete',
  })
  @ApiOkResponse({ description: 'Item deleted successfully' })
  async deleteItem(@Param('id') id: number) {
    const result = await this.partnerService.deleteItem(id);
    return {
      message: result?.[0]?.Message || 'Item deleted successfully',
    };
  }
}
