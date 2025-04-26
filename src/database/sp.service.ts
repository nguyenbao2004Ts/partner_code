import { Injectable } from '@nestjs/common';
import { dbPool } from './database';

@Injectable()
export class StoredProcedureService {
  async callProcedure(procedureName: string, params: any[] = []): Promise<any> {
    const connection = await dbPool.getConnection();
    try {
      const placeholders = params.map(() => '?').join(',');
      const [result] = await connection.query(
        `CALL ${procedureName}(${placeholders})`,
        params,
      );
      return Array.isArray(result) ? result[0] : result;
    } finally {
      connection.release();
    }
  }
}
