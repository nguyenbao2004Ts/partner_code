/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Get,
  NotFoundException,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsGetListDto } from './dto';
import {
  ApiBearerAuth,
  ApiOperation,
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
}
