import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteAppConfigDto {
  @ApiProperty({ example: 'KEY_APP_CONFIG' })
  @IsString()
  @IsNotEmpty()
  key: string;
}
