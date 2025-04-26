import { Injectable } from '@nestjs/common';
import { dbPool } from './database';
import { RouteParamtypes } from '@nestjs/common/enums/route-paramtypes.enum';

@Injectable()
export class StoredProcedureService {
  async callProcedure(procedureName: string, params: any[] = []): Promise<any> {
    const connection = await dbPool.getConnection();
    try {
      const placeholders = params.map(() => '?').join(',');
      const [rows] = await connection.query(
        `CALL ${procedureName}(${placeholders})`,
        RouteParamtypes,
      );
      return rows;
    } finally {
      connection.release();
    }
  }
}
