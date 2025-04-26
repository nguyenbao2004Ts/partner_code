import { Module, Global } from '@nestjs/common';
import { StoredProcedureService } from './sp.service';

@Global()
@Module({
  providers: [StoredProcedureService],
  exports: [StoredProcedureService],
})
export class DatabaseModule {}
