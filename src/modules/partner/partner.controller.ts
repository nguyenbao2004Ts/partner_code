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
  HttpStatus,
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
      data: data,
      statusCode: HttpStatus.OK,
      message: 'Categories retrieved successfully',
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
      data: data,
      statusCode: HttpStatus.OK,
      message: 'Services retrieved successfully',
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
      data: data,
      statusCode: HttpStatus.OK,
      message: 'Partners retrieved successfully',
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
      data: data,
      statusCode: HttpStatus.CREATED,
      message: 'Category created successfully',
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
      data: data,
      statusCode: HttpStatus.CREATED,
      message: 'Service created successfully',
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
      data: data,
      statusCode: HttpStatus.CREATED,
      message: 'Partner created successfully',
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
      statusCode: HttpStatus.OK,
      message: 'Category updated successfully',
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
      statusCode: HttpStatus.OK,
      message: 'Service updated successfully',
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
      statusCode: HttpStatus.OK,
      message: 'Partner updated successfully',
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
      statusCode: HttpStatus.OK,
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
      statusCode: HttpStatus.OK,
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
      statusCode: HttpStatus.OK,
      message: 'Partner deleted successfully',
    };
  }
}
