import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeletePartnerDto {
  @ApiProperty({ description: 'ID of the partner to delete' })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
