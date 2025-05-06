import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InsertAppConfigDto {
  @ApiProperty({ example: 'KEY_APP_CONFIG' })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({
    example: JSON.stringify({
      object_removal: {
        url: 'https://example.com',
        status: 'active',
      },
    }),
  })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: 'Config', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
