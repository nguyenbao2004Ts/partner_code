import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class LeadspropertyTotalDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  lead_property_id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
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
  @IsString()
  created_at_from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  created_at_to?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  updated_at_from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  updated_at_to?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ['3d_outside_status']?: number;

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
}
