
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly dataSource: DataSource
  ){}

  async findAll() {
    const result = await this.dataSource.query(
      `SELECT CONCAT(lastName, ', ', firstName) AS EmpName,
              T1.name AS Position,
              T4.BPLId,
              T4.BPLName,
              T4.DflWhs,
              (SELECT ListNum FROM OPLN WHERE ListName= CONCAT(T4.BPLName,'-Retail Price')) AS PriceListNum
       FROM OHEM T0
       INNER JOIN OHPS T1 ON T0.position=T1.posID
       INNER JOIN OUSR T2 ON T0.userId=T2.USERID
       INNER JOIN USR6 T3 ON T2.USER_CODE=T3.UserCode
       INNER JOIN OBPL T4 ON T3.BPLId=T4.BPLId 
       WHERE salesPrson > 0 AND T4.U_isDC ='N'`
    );
    return result;
  }
}
