/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteListRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteItem(id: number) {
    const result = await this.spService.callProcedureWithOutParams(
      'SP_DELETE',
      [id],
      ['p_error_code', 'p_error_message'],
    );

    switch (result.p_error_code) {
      case 200:
        return { message: result.p_error_message };
      case 400:
        throw new BadRequestException(result.p_error_message);
      case 404:
        throw new NotFoundException(result.p_error_message);
      case 409:
        throw new ConflictException(result.p_error_message);
      default:
        throw new BadRequestException('Unknown error');
    }
  }
}
