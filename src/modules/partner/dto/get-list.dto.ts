/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, IsIn, Matches } from 'class-validator';
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

  @ApiPropertyOptional({
    description: 'From date filter (format: YYYY-MM-DD HH:mm:ss)',
    example: '2000-01-01 00:00:00',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'create_at_from must be in format YYYY-MM-DD HH:mm:ss',
  })
  create_at_from?: string;

  @ApiPropertyOptional({
    description: 'To date filter (format: YYYY-MM-DD HH:mm:ss)',
    example: '2000-01-01 23:59:59',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'create_at_to must be in format YYYY-MM-DD HH:mm:ss',
  })
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
