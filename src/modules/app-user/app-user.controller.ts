/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Get,
  Query,
  UseGuards,
  NotFoundException,
  Patch,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { GetListAppUserDto, UpdateAppUserDto } from './dto/index';

@ApiBearerAuth('access-token')
@ApiTags('App-User')
@ApiBearerAuth()
@Controller('app-user/v1')
export class AppUserController {
  constructor(private readonly appUserService: AppUserService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/list')
  @ApiOperation({ summary: 'Get list of app users' })
  @ApiResponse({
    status: 200,
    description: 'List of app users retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'No app user found' })
  async getList(@Query() query: GetListAppUserDto) {
    const result = await this.appUserService.getListAppUser(query);
    if (!result || result.length === 0) {
      throw new NotFoundException('No app user found for the given query');
    }
    return {
      message: 'List of app users retrieved successfully',
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  @ApiOperation({ summary: 'Update app user' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input or phone/email' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateUser(@Body() dto: UpdateAppUserDto) {
    const result = await this.appUserService.updateAppUser(dto);
    return {
      message: result.message,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:email')
  @ApiOperation({ summary: 'Delete app user by email' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 400, description: 'Invalid email input' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Param('email') email: string) {
    const result = await this.appUserService.deleteAppUser(email);
    return {
      message: result.message,
    };
  }

  @Get('/total')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get total number of app users' })
  @ApiResponse({ status: 200, description: 'Total number of users retrieved' })
  async getTotalAppUser() {
    const result = await this.appUserService.getTotalAppUser();
    return {
      message: 'Total number of app users retrieved successfully',
      data: result,
    };
  }
}
