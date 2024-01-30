import { Injectable } from '@nestjs/common';
import { CreateLowerboundDto } from './dto/create-lowerbound.dto';
import { UpdateLowerboundDto } from './dto/update-lowerbound.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class LowerboundService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(PriceListNum: number, taxCode: string, itemCode: string, warehouseCode: string, UoMQty: number) {
    const uom = await this.dataSource.query(
      `SELECT dbo.fn_GetLowerBound (${PriceListNum}, '${taxCode}', '${itemCode}','${warehouseCode}', ${UoMQty}) AS LowerBound`
    );
    return uom;
  }
}
