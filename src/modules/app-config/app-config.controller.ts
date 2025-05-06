/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UseGuards,
  Param,
  Patch,
  Delete,
  Query,
  Get,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { AppConfigService } from './app-config.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
import {
  InsertAppConfigDto,
  UpdateAppConfigDto,
  GetListAppConfigDto,
  TotalAppConfigDto,
} from './dto/index';

@ApiBearerAuth('access-token')
@ApiTags('App-Config')
@Controller('app-config/v1')
export class AppConfigController {
  constructor(private readonly appConfigService: AppConfigService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/insert')
  @ApiOperation({
    summary: 'Insert new app config',
  })
  @ApiResponse({ status: 201, description: 'Insert successful' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: InsertAppConfigDto })
  async insertAppConfig(@Body() body: InsertAppConfigDto) {
    const result = await this.appConfigService.insertAppConfig(body);

    if (result.error_code !== 0) {
      throw new BadRequestException(result.error_message);
    }

    return {
      message: result.error_message,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:key')
  @ApiOperation({ summary: 'Update app config by key' })
  @ApiResponse({ status: 200, description: 'Update successful' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiBody({ type: UpdateAppConfigDto })
  async updateAppConfig(
    @Param('key') key: string,
    @Body() body: UpdateAppConfigDto,
  ) {
    const result = await this.appConfigService.updateAppConfig(key, body);

    if (result.error_code !== 0) {
      throw new BadRequestException(result.error_message);
    }

    return {
      message: result.error_message,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:key')
  @ApiOperation({ summary: 'Delete app config by key' })
  @ApiResponse({ status: 200, description: 'Delete successful' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  async deleteAppConfig(@Param('key') key: string) {
    const result = await this.appConfigService.deleteAppConfig(key);

    if (result.error_code !== 0) {
      throw new BadRequestException(result.error_message);
    }

    return {
      message: result.error_message,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/list')
  @ApiOperation({ summary: 'Get list of app config' })
  @ApiResponse({
    status: 200,
    description: 'List of app config retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'No app config found' })
  async getList(@Query() query: GetListAppConfigDto) {
    const result = await this.appConfigService.getListAppConfig(query);
    if (!result || result.length === 0) {
      throw new NotFoundException('No app config found for the given query');
    }
    return {
      message: 'List of app config retrieved successfully',
      data: result,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/total')
  @ApiOperation({ summary: 'Get total number of app config records' })
  @ApiResponse({
    status: 200,
    description: 'Total number of app config records',
    type: TotalAppConfigDto,
  })
  async getTotalAppConfig(): Promise<TotalAppConfigDto> {
    const result = await this.appConfigService.getTotalAppConfig();
    return { total: result.total };
  }
}
