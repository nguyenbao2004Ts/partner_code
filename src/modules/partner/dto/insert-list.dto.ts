import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InsertListDto {
  @ApiProperty({
    description: 'The type of data to insert (category, service, or partner)',
    enum: ['category', 'service', 'partner'],
  })
  @IsIn(['category', 'service', 'partner'])
  data_type: 'category' | 'service' | 'partner';

  @ApiProperty({ description: 'The unique code of the data item' })
  @IsNotEmpty()
  @IsString()
  data_code: string;

  @ApiProperty({ description: 'The title of the data item' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiProperty({
    description: 'The parent ID of the data item (if applicable)',
    required: false,
  })
  @IsOptional()
  @IsString()
  parent_id?: string;

  @ApiProperty({
    description: 'The image URL for the data item',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiProperty({
    description: 'The description of the data item',
    required: false,
  })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiProperty({
    description: 'The referral name for the data item',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiProperty({
    description: 'The referral email for the data item',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiProperty({
    description: 'The referral phone for the data item',
    required: false,
  })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
