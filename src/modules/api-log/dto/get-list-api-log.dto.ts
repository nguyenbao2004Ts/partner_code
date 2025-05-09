/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, Matches } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetListApiLogDto {
  @ApiPropertyOptional({ description: 'Filter by ID' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  id?: number;

  @ApiPropertyOptional({ description: 'Filter by name_log' })
  @IsOptional()
  @IsString()
  name_log?: string;

  @ApiPropertyOptional({
    description: 'From create date (format: YYYY-MM-DD HH:mm:ss)',
    example: '2023-01-01 00:00:00',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'create_date_from must be in format YYYY-MM-DD HH:mm:ss',
  })
  create_date_from?: string;

  @ApiPropertyOptional({
    description: 'To create date (format: YYYY-MM-DD HH:mm:ss)',
    example: '2023-12-31 23:59:59',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'create_date_to must be in format YYYY-MM-DD HH:mm:ss',
  })
  create_date_to?: string;

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
    description: 'Sort format: id,asc | name_log,desc | create_date,asc ...',
  })
  @IsOptional()
  @IsString()
  sort?: string;
}
