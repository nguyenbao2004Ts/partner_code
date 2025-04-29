/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetPartnerListDto {
  @ApiPropertyOptional({ description: 'ID of the partner to search for' })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiPropertyOptional({ description: 'Name of the partner to search for' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Service name related to partner' })
  @IsOptional()
  @IsString()
  name_service?: string;

  @ApiPropertyOptional({ description: 'Category name related to partner' })
  @IsOptional()
  @IsString()
  name_category?: string;

  @ApiPropertyOptional({
    description: 'From date for filtering partners (ISO format)',
  })
  @IsOptional()
  @IsDateString()
  create_at_form?: string;

  @ApiPropertyOptional({
    description: 'To date for filtering partners (ISO format)',
  })
  @IsOptional()
  @IsDateString()
  create_at_to?: string;

  @ApiPropertyOptional({
    description: 'Page number for pagination',
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  page?: number;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  size?: number;

  @ApiPropertyOptional({ description: 'Sort order (e.g., createdAt DESC)' })
  @IsOptional()
  @IsString()
  sort?: string;
}
