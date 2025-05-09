import { Injectable } from '@nestjs/common';
import { LeadsGetListRepository,LeadsInsertRepository,LeadsUpdateRepository,LeadsDeleteRepository,LeadsTotalRepository } from './repositories';
import { LeadsGetListDto,LeadsInsertDto,LeadsTotalDto,LeadsUpdateDto,} from './dto';

@Injectable()
export class LeadsService {
  constructor(
    private readonly getListRepo: LeadsGetListRepository,
    private readonly insertRepo: LeadsInsertRepository,
    private readonly updateRepo: LeadsUpdateRepository,
    private readonly deleteRepo: LeadsDeleteRepository,
    private readonly totalRepo: LeadsTotalRepository,
  ) {}

  async getList(dto: LeadsGetListDto): Promise<any> {
    return this.getListRepo.getList(dto);
  }

  async insert(dto: LeadsInsertDto): Promise<any> {
    return this.insertRepo.insert(dto);
  }

  async update(lead_id: number, dto: LeadsUpdateDto): Promise<any> {
    return this.updateRepo.updateLead(
      lead_id, 
      dto.first_name?? null,
      dto.last_name?? null,
      dto.email?? null,
      dto.phone_number?? null,
      dto.company_name?? null,
      dto.job_title?? null,
      dto.lead_source?? null,
      dto.lead_stage?? null,
      dto.lead_status?? null,
      dto.json_moredata?? null,
      dto.salesforce_lead_id?? null,
    );
  }

  async delete(lead_id: number): Promise<any> {
    return this.deleteRepo.deleteLead(lead_id);
  }

  async getTotal(dto: LeadsTotalDto): Promise<any> {
    return this.totalRepo.getTotal(dto);
  }

   
}
