/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, Matches } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetListAppConfigDto {
  @ApiPropertyOptional({ description: 'Search by config key' })
  @IsOptional()
  @IsString()
  key?: string;

  @ApiPropertyOptional({
    description: 'From date filter (format: YYYY-MM-DD HH:mm:ss)',
    example: '2023-01-01 00:00:00',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'created_at_from must be in format YYYY-MM-DD HH:mm:ss',
  })
  created_at_from?: string;

  @ApiPropertyOptional({
    description: 'To date filter (format: YYYY-MM-DD HH:mm:ss)',
    example: '2023-12-31 23:59:59',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'created_at_to must be in format YYYY-MM-DD HH:mm:ss',
  })
  created_at_to?: string;

  @ApiPropertyOptional({
    description: 'From update date filter (format: YYYY-MM-DD HH:mm:ss)',
    example: '2023-01-01 00:00:00',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'updated_at_from must be in format YYYY-MM-DD HH:mm:ss',
  })
  updated_at_from?: string;

  @ApiPropertyOptional({
    description: 'To update date filter (format: YYYY-MM-DD HH:mm:ss)',
    example: '2023-12-31 23:59:59',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'updated_at_to must be in format YYYY-MM-DD HH:mm:ss',
  })
  updated_at_to?: string;

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
    description: 'Sort string: [key,ASC|DESC], [created_at,ASC|DESC], etc.',
  })
  @IsOptional()
  @IsString()
  sort?: string;
}
