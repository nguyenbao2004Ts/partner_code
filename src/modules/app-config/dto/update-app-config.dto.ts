import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAppConfigDto {
  @ApiProperty({
    example: JSON.stringify({
      object_removal: {
        url: 'https://example.com',
        status: 'inactive',
      },
    }),
  })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: 'Updated description', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
