import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class UpdateAppUserDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  user_email: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  user_firstname: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  user_lastname: string;

  @ApiProperty({ example: 1, description: '0: inactive, 1: active' })
  @IsInt()
  @Min(0)
  @Max(1)
  user_status: number;

  @ApiProperty({ example: '0987654321' })
  @IsString()
  @IsOptional()
  phone_number?: string;
}
