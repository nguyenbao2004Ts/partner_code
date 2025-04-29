import { Module, Global } from '@nestjs/common';
import { StoredProcedureService } from './database-Sp.service';

@Global()
@Module({
  providers: [StoredProcedureService],
  exports: [StoredProcedureService],
})
export class DatabaseModule {}
