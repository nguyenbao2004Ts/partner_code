/* eslint-disable @typescript-eslint/no-unsafe-return */
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
  async callProcedureWithOutParams(
    procedureName: string,
    inputParams: any[] = [],
    outParams: string[] = [],
  ): Promise<Record<string, any>> {
    const connection = await dbPool.getConnection();
    try {
      for (const outParam of outParams) {
        await connection.query(`SET @${outParam} = NULL;`);
      }

      const inputPlaceholders = inputParams.map(() => '?').join(', ');

      const outPlaceholders = outParams.map((p) => `@${p}`).join(', ');

      const callSql = `CALL ${procedureName}(${[inputPlaceholders, outPlaceholders].filter(Boolean).join(', ')})`;

      await connection.query(callSql, inputParams);

      const [rows] = await connection.query(
        `SELECT ${outParams.map((p) => `@${p} AS ${p}`).join(', ')}`,
      );
      return rows[0];
    } finally {
      connection.release();
    }
  }
}
