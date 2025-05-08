import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class TotalDto {
  @ApiPropertyOptional({
    description: 'Type of data: category | service | partner',
  })
  @IsOptional()
  @IsString()
  data_type?: string;

  @ApiPropertyOptional({ description: 'Search by ID' })
  @IsOptional()
  @IsString()
  search_id?: string;

  @ApiPropertyOptional({ description: 'Search by name' })
  @IsOptional()
  @IsString()
  search_name?: string;

  @ApiPropertyOptional({ description: 'Search by service name' })
  @IsOptional()
  @IsString()
  search_name_service?: string;

  @ApiPropertyOptional({ description: 'Search by category name' })
  @IsOptional()
  @IsString()
  search_name_category?: string;

  @ApiPropertyOptional({ description: 'Search from date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  search_from_date?: string;

  @ApiPropertyOptional({ description: 'Search to date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  search_to_date?: string;
}
