import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class InsertCategoryDto {
  @ApiProperty({ description: 'The unique code of the category' })
  @IsNotEmpty()
  @IsString()
  dataCode: string;

  @ApiProperty({ description: 'The title of the category' })
  @IsNotEmpty()
  @IsString()
  dataTitle: string;

  @ApiProperty({
    description: 'The image URL for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  dataImage?: string;

  @ApiProperty({
    description: 'The description of the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  dataDesc?: string;

  @ApiProperty({
    description: 'The referral name for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralName?: string;

  @ApiProperty({
    description: 'The referral email for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralEmail?: string;

  @ApiProperty({
    description: 'The referral phone for the category',
    required: false,
  })
  @IsOptional()
  @IsString()
  referralPhone?: string;
}
