import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DiscountPriceService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(brachID: number, beforeDiscount: number, cardCode: string, itemCode: string, Qty: number, UoM: string, lowerBound: string, creditCard: string, 
    debitCard: string, PDC: string, PO: string, taxCode: string) {
    const uom = await this.dataSource.query(
      `SELECT dbo.fn_GetDiscPrice (${brachID}, ${beforeDiscount},'${cardCode}', '${itemCode}',${Qty}, '${UoM}', '${lowerBound}','${creditCard}','${debitCard}',
      '${PDC}', '${PO}','${taxCode}') AS DiscPrice`
    );
    return uom;
  }
}
  