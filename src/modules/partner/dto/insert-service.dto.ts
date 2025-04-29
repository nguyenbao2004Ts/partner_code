import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InsertServiceDto {
  @ApiProperty({ description: 'The unique code of the service' })
  @IsNotEmpty()
  @IsString()
  dataCode: string;

  @ApiProperty({ description: 'The title of the service' })
  @IsNotEmpty()
  @IsString()
  dataTitle: string;

  @ApiProperty({
    description: 'The category ID of the parent category for the service',
  })
  @IsNotEmpty()
  @IsString()
  parentCategoryId: string;

  @ApiProperty({
    description: 'The image URL for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  dataImage?: string;

  @ApiProperty({
    description: 'The description of the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  dataDesc?: string;

  @ApiProperty({
    description: 'The referral name for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralName?: string;

  @ApiProperty({
    description: 'The referral email for the service',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  referralEmail?: string;

  @ApiProperty({
    description: 'The referral phone for the service',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralPhone?: string;
}
