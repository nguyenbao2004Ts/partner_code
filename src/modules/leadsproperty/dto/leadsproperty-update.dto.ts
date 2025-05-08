import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsNumber } from 'class-validator';

export class LeadspropertyUpdateDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  lead_id: number;

  @ApiProperty({ example: 'apartment' })
  @IsString()
  lead_property_type: string;

  @ApiProperty({ example: 'Ward 3, District 7' })
  @IsOptional()
  @IsString()
  location_elements?: string;

  @ApiProperty({ example: '123 Tân Mỹ, Quận 7' })
  @IsString()
  full_address: string;

  @ApiProperty({ example: '123 Tân Mỹ' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: 'Hồ Chí Minh' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ example: 'Hồ Chí Minh' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({ example: '70000' })
  @IsOptional()
  @IsString()
  postal_code?: string;

  @ApiProperty({ example: 'Vietnam' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({ example: { bedrooms: 3, bathrooms: 2 } })
  @IsOptional()
  json_metadata?: string;

  @ApiProperty({ example: 'Need verification' })
  @IsOptional()
  @IsString()
  lead_property_note?: string;

  @ApiProperty({ example: { lat: 10.123, lng: 106.456 } })
  @IsOptional()
  json_address: string;

  @ApiProperty({ example: 1001 })
  @IsOptional()
  @IsInt()
  property_id?: number;

  @ApiProperty({ example: 106.712 })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({ example: 10.765 })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ example: ['https://ksplat.link/1', 'https://ksplat.link/2'] })
  @IsOptional()
  ksplat_urls?: Array<string>;

  @ApiProperty({ example: ['https://video.link/1', 'https://video.link/2'] })
  @IsOptional()
  captured_video_urls?: Array<string>;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  ['3d_outside_status']?: number;

  @ApiProperty({ example: 'ready' })
  @IsOptional()
  @IsString()
  lead_property_stage?: string;

  @ApiProperty({ example: 'active' })
  @IsOptional()
  @IsString()
  lead_property_status?: string;

  @ApiProperty({ example: 'SF123456' })
  @IsOptional()
  @IsString()
  lead_property_sf_id?: string;

  @ApiProperty({ example: 'verified' })
  @IsOptional()
  @IsString()
  location_status?: string;
}
