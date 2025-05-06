import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TotalDto {
  @ApiPropertyOptional({
    description: 'Type of data: category | service | partner',
  })
  @IsString()
  data_type: string;
}
