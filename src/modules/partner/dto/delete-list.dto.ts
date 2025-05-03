import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteListDto {
  @ApiProperty({ description: 'ID of the metadata partner to delete' })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
