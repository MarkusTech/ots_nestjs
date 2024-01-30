import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TaxRateService {
  constructor(
    private readonly dataSource: DataSource
  ){}

  async findAll(taxCode: string) {
    const taxRate = await this.dataSource.query(
      `SELECT Rate FROM OVTG WHERE Code= '${taxCode}'`
    );
    return taxRate;
  }
}
