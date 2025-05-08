/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Get,
  Query,
  UseGuards,
  NotFoundException,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { LeadspropertyService } from './leadsproperty.service';
import {
  LeadspropertyGetListDto,
  LeadspropertyInsertDto,
  LeadspropertyTotalDto,
  LeadspropertyUpdateDto,
} from './dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';

@ApiTags('leadsproperty')
@ApiBearerAuth('access-token')
@Controller('leadsproperty/v1')
export class LeadspropertyController {
  constructor(private readonly leadspropertyService: LeadspropertyService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  @ApiOperation({ summary: 'Get list of leads property' })
  @ApiResponse({ status: 200, description: 'List retrieved successfully' })
  @ApiResponse({ status: 404, description: 'No data found' })
  async getList(@Query() query: LeadspropertyGetListDto) {
    const result = await this.leadspropertyService.getList(query);
    if (!result || result.length === 0) {
      throw new NotFoundException('No leads property found');
    }
    return {
      message: 'List retrieved successfully',
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/insert')
  @ApiOperation({ summary: 'Insert a new leads property' })
  @ApiResponse({ status: 200, description: 'Insert successfully' })
  async insert(@Body() dto: LeadspropertyInsertDto) {
    const result = await this.leadspropertyService.insert(dto);
    return {
      message: result.message,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:lead_property_id')
  @ApiOperation({ summary: 'Partially update a lead property' })
  @ApiParam({ name: 'lead_property_id', type: Number, example: 1 })
  async updateLeadProperty(
    @Param('lead_property_id', ParseIntPipe) lead_property_id: number,
    @Body() dto: LeadspropertyUpdateDto,
  ): Promise<{ message: string }> {
    return this.leadspropertyService.update(lead_property_id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:lead_property_id')
  @ApiOperation({ summary: 'Delete a lead property by ID' })
  @ApiParam({ name: 'lead_property_id', type: String })
  @ApiResponse({ status: 200, description: 'Delete successfully' })
  async delete(@Param('lead_property_id') lead_property_id: string) {
    const result = await this.leadspropertyService.delete(lead_property_id);
    return {
      message: result.message,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/total')
  @ApiOperation({ summary: 'Get total of leads property with filters' })
  @ApiResponse({ status: 200, description: 'Total retrieved successfully' })
  async getTotal(@Query() query: LeadspropertyTotalDto) {
    const result = await this.leadspropertyService.getTotal(query);
    return {
      message: 'Total retrieved successfully',
      data: result,
    };
  }
}
