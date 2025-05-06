import { ApiProperty } from '@nestjs/swagger';

export class TotalAppConfigDto {
  @ApiProperty({ example: 5, description: 'Tổng số lượng App Config' })
  total: number;
}
