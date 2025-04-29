import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteCategoryDto {
  @ApiProperty({ description: 'ID of the category to delete' })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
