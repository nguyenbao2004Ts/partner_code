import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsNumber } from 'class-validator';

export class LeadspropertyInsertDto {
  @ApiProperty()
  @IsInt()
  lead_id: number;

  @ApiProperty()
  @IsString()
  lead_property_type: string;

  @ApiProperty()
  @IsString()
  location_elements: string;

  @ApiProperty()
  @IsString()
  full_address: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  postal_code: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsOptional()
  json_metadata: any;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lead_property_note?: string;

  @ApiProperty()
  @IsOptional()
  json_address: any;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  property_id?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty()
  @IsOptional()
  ksplat_urls?: any;

  @ApiProperty()
  @IsOptional()
  captured_video_urls?: any;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  _3d_outside_status?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lead_property_stage?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lead_property_status?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lead_property_sf_id?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location_status?: string;
}
