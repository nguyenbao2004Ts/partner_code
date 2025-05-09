import { ApiProperty } from '@nestjs/swagger';
import {  IsOptional, IsString,  } from 'class-validator';

export class LeadsUpdateDto {
    @ApiProperty()
    @IsString()
    first_name: string;
  
    @ApiProperty()
    @IsString()
    last_name: string;
  
    @ApiProperty()
    @IsString()
    email: string;
  
    @ApiProperty()
    @IsOptional()
    phone_number: number;
  
    @ApiProperty()
    @IsString()
    company_name: string;
  
    @ApiProperty()
    @IsString()
    job_title: string;
  
    @ApiProperty()
    @IsString()
    lead_source: string;
  
    @ApiProperty()
    @IsString()
    lead_stage: string;
  
    @ApiProperty()
    @IsString()
    lead_status: string;
  
    @ApiProperty()
    @IsOptional()
    json_moredata: any;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    salesforce_lead_id?: string;
}
