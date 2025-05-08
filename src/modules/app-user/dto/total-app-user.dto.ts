import { ApiProperty } from '@nestjs/swagger';

export class TotalAppUserDto {
  @ApiProperty({ example: 100, description: 'Tổng số lượng App User' })
  total: number;
}
