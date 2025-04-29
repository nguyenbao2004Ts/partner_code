// update-category.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiPropertyOptional({ description: 'ID of the category' })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;

  @ApiPropertyOptional({ description: 'Code of the category' })
  @IsOptional()
  @IsString()
  dataCode?: string;

  @ApiProperty({ description: 'Title of the category' })
  @IsNotEmpty()
  @IsString()
  dataTitle: string;

  @ApiPropertyOptional({ description: 'Image URL of the category' })
  @IsOptional()
  @IsString()
  dataImage?: string;

  @ApiPropertyOptional({ description: 'Description of the category' })
  @IsOptional()
  @IsString()
  dataDesc?: string;

  @ApiPropertyOptional({ description: 'Referral name' })
  @IsOptional()
  @IsString()
  referralName?: string;

  @ApiPropertyOptional({ description: 'Referral email address' })
  @IsOptional()
  @IsEmail()
  referralEmail?: string;

  @ApiPropertyOptional({ description: 'Referral phone number' })
  @IsOptional()
  @IsString()
  referralPhone?: string;
}
