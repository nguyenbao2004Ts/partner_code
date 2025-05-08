/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoredProcedureService } from 'src/database/database-Sp.service';

@Injectable()
export class DeleteAppUserRepository {
  constructor(private readonly spService: StoredProcedureService) {}

  async deleteAppUser(user_email: string): Promise<{ message: string }> {
    const result = await this.spService.callProcedureWithOutParams(
      'SP_APP_USER_DELETE',
      [user_email],
      ['p_error_code', 'p_error_message'],
    );

    switch (result.p_error_code) {
      case 0:
        return { message: result.p_error_message };
      case 400:
        throw new BadRequestException(result.p_error_message);
      case 404:
        throw new NotFoundException(result.p_error_message);
      case 409:
        throw new ConflictException(result.p_error_message);
      default:
        throw new BadRequestException('Unknown error occurred');
    }
  }
}
