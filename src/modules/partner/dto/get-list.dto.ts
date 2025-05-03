/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsInt,
  IsIn,
  IsDateString,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetListDto {
  @ApiPropertyOptional({
    description: 'Type of data: category | service | partner',
  })
  @IsIn(['category', 'service', 'partner'])
  data_type: string;

  @ApiPropertyOptional({ description: 'Search by ID' })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiPropertyOptional({ description: 'Search by Name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Search by service name (for partner)' })
  @IsOptional()
  @IsString()
  service_name?: string;

  @ApiPropertyOptional({
    description: 'Search by category name (for partner, service)',
  })
  @IsOptional()
  @IsString()
  category_name?: string;

  @ApiPropertyOptional({ description: 'From date filter' })
  @IsOptional()
  @IsDateString()
  create_at_from?: string;

  @ApiPropertyOptional({ description: 'To date filter' })
  @IsOptional()
  @IsDateString()
  create_at_to?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 10 })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  size?: number;

  @ApiPropertyOptional({
    description: 'Sort string: [ID,ASC|DESC], [NAME,ASC|DESC], etc.',
  })
  @IsOptional()
  @IsString()
  sort?: string;
}
