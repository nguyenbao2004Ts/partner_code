import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LeadspropertyDeleteDto {
  @ApiProperty({ description: 'Lead Property ID to delete' })
  @IsNotEmpty()
  @IsString()
  lead_property_id: string;
}
