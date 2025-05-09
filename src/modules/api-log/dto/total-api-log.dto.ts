import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class TotalApiLogDto {
  @ApiPropertyOptional()
  @IsOptional()
  id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  name_log?: string;

  @ApiPropertyOptional()
  @IsOptional()
  create_date_from?: string;

  @ApiPropertyOptional()
  @IsOptional()
  create_date_to?: string;
}
