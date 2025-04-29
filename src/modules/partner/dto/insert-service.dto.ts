import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InsertServiceDto {
  @ApiProperty({ description: 'The unique code of the service' })
  @IsNotEmpty()
  @IsString()
  data_code: string;

  @ApiProperty({ description: 'The title of the service' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiProperty({
    description: 'The category ID of the parent category for the service',
  })
  @IsNotEmpty()
  @IsString()
  parent_category_id: string;

  @ApiProperty({
    description: 'The image URL for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiProperty({
    description: 'The description of the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiProperty({
    description: 'The referral name for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiProperty({
    description: 'The referral email for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiProperty({
    description: 'The referral phone for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
