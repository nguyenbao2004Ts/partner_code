/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetCategoryListDto {
  @ApiPropertyOptional({ description: 'ID of the category to search for' })
  @IsOptional()
  @IsString()
  searchId?: string;

  @ApiPropertyOptional({ description: 'Name of the category to search for' })
  @IsOptional()
  @IsString()
  searchName?: string;

  @ApiPropertyOptional({
    description: 'From date for filtering categories (ISO format)',
  })
  @IsOptional()
  @IsDateString()
  searchFromDate?: string;

  @ApiPropertyOptional({
    description: 'To date for filtering categories (ISO format)',
  })
  @IsOptional()
  @IsDateString()
  searchToDate?: string;

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
  pageSize?: number;

  @ApiPropertyOptional({ description: 'Sort order (e.g., createdAt DESC)' })
  @IsOptional()
  @IsString()
  sort?: string;
}
