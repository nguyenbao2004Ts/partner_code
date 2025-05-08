/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Request } from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
import { CreateUserDto } from 'src/modules/users/dto/create-users.dto';
import { ValidationPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Auth')
@ApiBearerAuth('access-token')
@Controller('auth/v1')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'New User Registration' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Registration successful' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async register(@Body() userData: CreateUserDto) {
    const result = await this.userService.create(userData);
    return {
      message: result.message,
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login to the system' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'johndoe@gmail.com' },
        password: { type: 'string', example: '123456Ts' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful, return access_token',
  })
  @ApiResponse({ status: 401, description: 'Wrong email or password' })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Refresh access token using refresh token' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        refresh_token: { type: 'string', example: 'your_refresh_token_here' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Token refreshed successfully, return new_access_token',
  })
  @ApiResponse({ status: 401, description: 'Invalid or expired refresh token' })
  async refresh(
    @Request() req: any,
    @Body('refresh_token') refreshToken: string,
  ) {
    const payload = await this.authService.verifyRefreshToken(refreshToken);
    return this.authService.refreshToken(payload.sub, refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: 'Logout and invalidate refresh token' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Logout successful' })
  @ApiResponse({ status: 401, description: 'Token is invalid or expired' })
  async logout(@Request() req: any) {
    return this.authService.logout(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user information from access_token' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'User information' })
  @ApiResponse({ status: 401, description: 'Token is invalid or expired' })
  getProfile(@Request() req: any) {
    return req.user;
  }
}
