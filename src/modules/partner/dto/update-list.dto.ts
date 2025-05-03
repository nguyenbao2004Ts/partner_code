import { IsIn, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateListDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;

  @ApiProperty({
    description: 'Type of data (category, service, or partner)',
    enum: ['category', 'service', 'partner'],
  })
  @IsIn(['category', 'service', 'partner'])
  data_type: 'category' | 'service' | 'partner';

  @ApiProperty({ description: 'Unique code of the item' })
  @IsOptional()
  @IsString()
  data_code?: string;

  @ApiProperty({ description: 'Title of the item' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiProperty({
    description: 'Parent ID (0, single or comma-separated IDs)',
    required: false,
  })
  @IsOptional()
  @IsString()
  parent_id?: string;

  @ApiProperty({ description: 'Image URL', required: false })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiProperty({ description: 'Description', required: false })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiProperty({ description: 'Referral name', required: false })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiProperty({ description: 'Referral email', required: false })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiProperty({ description: 'Referral phone', required: false })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
