import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdatePartnerDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;

  @ApiPropertyOptional({ description: 'Code of the partner' })
  @IsOptional()
  @IsString()
  data_code?: string;

  @ApiProperty({ description: 'Title of the partner' })
  @IsNotEmpty()
  @IsString()
  data_title: string;

  @ApiPropertyOptional({ description: 'Parent ID related to service' })
  @IsOptional()
  @IsString()
  data_parent_id?: string;

  @ApiPropertyOptional({ description: 'Image URL of the partner' })
  @IsOptional()
  @IsString()
  data_image?: string;

  @ApiPropertyOptional({ description: 'Description of the partner' })
  @IsOptional()
  @IsString()
  data_desc?: string;

  @ApiPropertyOptional({ description: 'Referral name' })
  @IsOptional()
  @IsString()
  referral_name?: string;

  @ApiPropertyOptional({ description: 'Referral email address' })
  @IsOptional()
  @IsString()
  referral_email?: string;

  @ApiPropertyOptional({ description: 'Referral phone number' })
  @IsOptional()
  @IsString()
  referral_phone?: string;
}
