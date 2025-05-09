import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class LeadsUpdateRepository {
  constructor(private readonly spService: StoredProcedureService) {}
    async updateLead(
        lead_id: number,
        first_name: string,
        last_name: string,
        email: string,
        phone_number: number | null,
        company_name: string,
        job_title: string,
        lead_source: string,
        lead_stage: string,
        lead_status: string,
        json_moredata: string | null,
        salesforce_lead_id: string | null,
    ): Promise<{ message: string }> {
        const jsonMoredataStr = JSON.stringify(json_moredata || {});
    
        const result = await this.spService.callProcedureWithOutParams(
        'SP_LEADS_UPDATE',
        [
            lead_id,
            first_name,
            last_name,
            email,
            phone_number,
            company_name,
            job_title,
            lead_source,
            lead_stage,
            lead_status,
            jsonMoredataStr,
            salesforce_lead_id
        ],
        ['p_error_code', 'p_error_message'],
        );
    
        switch (result.p_error_code) {
        case 200:
            return { message: result.p_error_message };
        case 400:
            throw new BadRequestException(result.p_error_message);
        default:
            throw new BadRequestException('Unknown error');
        }
    }
}