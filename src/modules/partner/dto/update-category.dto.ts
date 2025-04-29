// update-category.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;

  @ApiPropertyOptional({ description: 'Code of the category' })
  @IsOptional()
  @IsString()
  data_code?: string;

  @ApiProperty({ description: 'Title of the category' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiPropertyOptional({ description: 'Image URL of the category' })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiPropertyOptional({ description: 'Description of the category' })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiPropertyOptional({ description: 'Referral name' })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiPropertyOptional({ description: 'Referral email address' })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiPropertyOptional({ description: 'Referral phone number' })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
