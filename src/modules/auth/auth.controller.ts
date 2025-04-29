/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
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

@ApiTags('auth')
@ApiBearerAuth('access-token')
@Controller('auth/v1')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Đăng ký người dùng mới' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Đăng ký thành công' })
  @ApiResponse({ status: 400, description: 'Dữ liệu không hợp lệ' })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async register(@Body() userData: CreateUserDto) {
    const result = await this.userService.create(userData);
    return {
      statusCode: HttpStatus.CREATED,
      message: result.message,
    };
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập hệ thống' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'johndoe@example.com' },
        password: { type: 'string', example: 'StrongPass123' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Đăng nhập thành công, trả về access_token',
  })
  @ApiResponse({ status: 401, description: 'Sai email hoặc mật khẩu' })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Lấy thông tin người dùng từ access_token' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Thông tin người dùng' })
  @ApiResponse({ status: 401, description: 'Token không hợp lệ hoặc hết hạn' })
  getProfile(@Request() req: any) {
    return req.user;
  }
}
