import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InsertPartnerDto {
  @ApiProperty({ description: 'The unique code of the partner' })
  @IsNotEmpty()
  @IsString()
  dataCode: string;

  @ApiProperty({ description: 'The title of the partner' })
  @IsNotEmpty()
  @IsString()
  dataTitle: string;

  @ApiProperty({
    description: 'The service ID of the parent service for the partner',
  })
  @IsNotEmpty()
  @IsString()
  parentServiceId: string;

  @ApiProperty({
    description: 'The image URL for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  dataImage?: string;

  @ApiProperty({
    description: 'The description of the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  dataDesc?: string;

  @ApiProperty({
    description: 'The referral name for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralName?: string;

  @ApiProperty({
    description: 'The referral email for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralEmail?: string;

  @ApiProperty({
    description: 'The referral phone for the partner',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralPhone?: string;
}
