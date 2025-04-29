import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteServiceDto {
  @ApiProperty({ description: 'ID of the service to delete' })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
