import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InsertPartnerDto {
  @ApiProperty({ description: 'The unique code of the partner' })
  @IsNotEmpty()
  @IsString()
  data_code: string;

  @ApiProperty({ description: 'The title of the partner' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiProperty({
    description: 'The service ID of the parent service for the partner',
  })
  @IsNotEmpty()
  @IsString()
  parent_service_id: string;

  @ApiProperty({
    description: 'The image URL for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiProperty({
    description: 'The description of the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiProperty({
    description: 'The referral name for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiProperty({
    description: 'The referral email for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiProperty({
    description: 'The referral phone for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
