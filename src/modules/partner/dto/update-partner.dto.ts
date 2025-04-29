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
  dataCode?: string;

  @ApiProperty({ description: 'Title of the partner' })
  @IsNotEmpty()
  @IsString()
  dataTitle: string;

  @ApiPropertyOptional({ description: 'Parent ID related to service' })
  @IsOptional()
  @IsString()
  dataParentId?: string;

  @ApiPropertyOptional({ description: 'Image URL of the partner' })
  @IsOptional()
  @IsString()
  dataImage?: string;

  @ApiPropertyOptional({ description: 'Description of the partner' })
  @IsOptional()
  @IsString()
  dataDesc?: string;

  @ApiPropertyOptional({ description: 'Referral name' })
  @IsOptional()
  @IsString()
  referralName?: string;

  @ApiPropertyOptional({ description: 'Referral email address' })
  @IsOptional()
  @IsString()
  referralEmail?: string;

  @ApiPropertyOptional({ description: 'Referral phone number' })
  @IsOptional()
  @IsString()
  referralPhone?: string;
}
