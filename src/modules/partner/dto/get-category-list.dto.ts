/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetCategoryListDto {
  @ApiPropertyOptional({
    description: 'Seach: id, name, create_at_from, create_at_to',
  })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiPropertyOptional({ description: 'Name of the category to search for' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'From date for filtering categories',
  })
  @IsOptional()
  @IsDateString()
  create_at_from?: string;

  @ApiPropertyOptional({
    description: 'To date for filtering categories',
  })
  @IsOptional()
  @IsDateString()
  create_at_to?: string;

  @ApiPropertyOptional({
    description: 'Page number for pagination',
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  page?: number;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  size?: number;

  @ApiPropertyOptional({
    description:
      'sort: [id | name | create_at],desc  [id | name | create_at],asc',
  })
  @IsOptional()
  @IsString()
  sort?: string;
}
