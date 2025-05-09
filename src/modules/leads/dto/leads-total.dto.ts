/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class LeadsTotalDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  lead_id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  last_name?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  phone_number?: number;

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
  @IsString()
  lead_source?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lead_stage?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lead_status?: string;


}
