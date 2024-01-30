import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class WarehouseSohService {
  constructor(
    private readonly dataSource: DataSource
  ){}

  async findAll(itemCode: string, UoM: string, branchID: number) {
    const taxRate = await this.dataSource.query(
      `SELECT * FROM dbo.TVF_WHSE_SOH ('${itemCode}','${UoM}',${branchID})`
    );
    return taxRate;
  }
}
