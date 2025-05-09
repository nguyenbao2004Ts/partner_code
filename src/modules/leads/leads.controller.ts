/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LeadsService } from './leads.service';
import {
  LeadsGetListDto,
  LeadsInsertDto,
  LeadsTotalDto,
  LeadsUpdateDto,
} from './dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';

@ApiTags('Leads')
@ApiBearerAuth('access-token')
@Controller('leads/v1')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  @ApiOperation({ summary: 'Get list of leads property' })
  @ApiResponse({ status: 200, description: 'List retrieved successfully' })
  @ApiResponse({ status: 404, description: 'No data found' })
  async getList(@Query() query: LeadsGetListDto) {
    const result = await this.leadsService.getList(query);
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
  async insert(@Body() dto: LeadsInsertDto) {
    const result = await this.leadsService.insert(dto);
    return {
      message: 'Insert successfully',
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update:lead_id')
  @ApiParam({ name: 'lead_id', type: Number, example: 1 })
  @ApiOperation({ summary: 'Update a leads property' })
  async update(
    @Param('lead_id', ParseIntPipe) lead_id: number,
    @Body() dto: LeadsUpdateDto,
  ): Promise<{ message: string }> {
    return this.leadsService.update(lead_id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:lead_id')
  @ApiOperation({ summary: 'Delete a leads property' })
  @ApiParam({ name: 'lead_id', type: Number, example: 1 })
  async deleteLead(
    @Param('lead_id', ParseIntPipe) lead_id: number,
  ): Promise<{ message: string }> {
    return this.leadsService.delete(lead_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/total')
  @ApiOperation({ summary: 'Get total of leads  with filters' })
  @ApiResponse({ status: 200, description: 'Total retrieved successfully' })
  async getTotal(@Query() query: LeadsTotalDto) {
    const result = await this.leadsService.getTotal(query);
    return {
      message: 'Total retrieved successfully',
      data: result,
    };
  }
}
