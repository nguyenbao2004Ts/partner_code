/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class LeadspropertyGetListDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  lead_property_id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  lead_id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lead_property_type?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  created_at_from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  created_at_to?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  updated_at_from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  updated_at_to?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  outside_status?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lead_property_stage?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lead_property_status?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location_status?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Page number', default: 10 })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  size?: number = 10;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sort?: string;
}
