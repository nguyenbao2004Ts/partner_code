import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class InsertCategoryDto {
  @ApiProperty({ description: 'The unique code of the category' })
  @IsNotEmpty()
  @IsString()
  data_code: string;

  @ApiProperty({ description: 'The title of the category' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiProperty({
    description: 'The image URL for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiProperty({
    description: 'The description of the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiProperty({
    description: 'The referral name for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiProperty({
    description: 'The referral email for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiProperty({
    description: 'The referral phone for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
