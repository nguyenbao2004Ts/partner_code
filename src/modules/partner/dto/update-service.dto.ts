import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdateServiceDto {
  @ApiPropertyOptional({ description: 'ID of the service' })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;

  @ApiPropertyOptional({ description: 'Code of the service' })
  @IsOptional()
  @IsString()
  dataCode?: string;

  @ApiProperty({ description: 'Title of the service' })
  @IsNotEmpty()
  @IsString()
  dataTitle: string;

  @ApiPropertyOptional({ description: 'Parent ID related to category' })
  @IsOptional()
  @IsString()
  dataParentId?: string;

  @ApiPropertyOptional({ description: 'Image URL of the service' })
  @IsOptional()
  @IsString()
  dataImage?: string;

  @ApiPropertyOptional({ description: 'Description of the service' })
  @IsOptional()
  @IsString()
  dataDesc?: string;

  @ApiPropertyOptional({ description: 'Referral name' })
  @IsOptional()
  @IsString()
  referralName?: string;

  @ApiPropertyOptional({ description: 'Referral email address' })
  @IsOptional()
  @IsEmail()
  referralEmail?: string;

  @ApiPropertyOptional({ description: 'Referral phone number' })
  @IsOptional()
  @IsString()
  referralPhone?: string;
}
