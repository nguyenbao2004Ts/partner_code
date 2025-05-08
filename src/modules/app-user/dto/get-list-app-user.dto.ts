/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, Matches } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetListAppUserDto {
  @ApiPropertyOptional({ description: 'Search by user email' })
  @IsOptional()
  @IsString()
  user_email?: string;

  @ApiPropertyOptional({
    description: 'From created date filter (YYYY-MM-DD HH:mm:ss)',
    example: '2023-01-01 00:00:00',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'created_at_from must be in format YYYY-MM-DD HH:mm:ss',
  })
  created_at_from?: string;

  @ApiPropertyOptional({
    description: 'To created date filter (YYYY-MM-DD HH:mm:ss)',
    example: '2023-12-31 23:59:59',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'created_at_to must be in format YYYY-MM-DD HH:mm:ss',
  })
  created_at_to?: string;

  @ApiPropertyOptional({
    description: 'From updated date filter (YYYY-MM-DD HH:mm:ss)',
    example: '2023-01-01 00:00:00',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'updated_at_from must be in format YYYY-MM-DD HH:mm:ss',
  })
  updated_at_from?: string;

  @ApiPropertyOptional({
    description: 'To updated date filter (YYYY-MM-DD HH:mm:ss)',
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
    description:
      'Sort string: user_email,asc | created_at,desc | updated_at,asc...',
  })
  @IsOptional()
  @IsString()
  sort?: string;
}
