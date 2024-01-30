import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TaxCodeService {
    constructor(
        // @InjectRepository(Item)
        // private readonly itemRepo: Repository<Uom>,
        private readonly dataSource: DataSource
      ){}
    
      async findAll(cardCode: string, warehouseCode: string) {
        const uom = await this.dataSource.query(
          `SELECT dbo.fn_GetTaxCode ('${cardCode}','${warehouseCode}') AS TaxCode`
        );
        return uom;
      }
}
