/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiLogService } from './api-log.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
import { GetListApiLogDto, TotalApiLogDto } from './dto';

@ApiTags('API Logs')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('api-log/v1')
export class ApiLogController {
  constructor(private readonly apiLogService: ApiLogService) {}

  @Get('get-list')
  @ApiOperation({ summary: 'Get list of API logs' })
  @ApiResponse({ status: 200, description: 'Success' })
  async getList(@Query() dto: GetListApiLogDto) {
    return this.apiLogService.getList(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/total')
  @ApiOperation({ summary: 'Get total of Api logs  with filters' })
  @ApiResponse({ status: 200, description: 'Total retrieved successfully' })
  async getTotal(@Query() query: TotalApiLogDto) {
    const result = await this.apiLogService.getTotal(query);
    return {
      message: 'Total retrieved successfully',
      data: result,
    };
  }
}
