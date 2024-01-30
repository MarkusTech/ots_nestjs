import { Injectable } from '@nestjs/common';
import { CreateSrpDto } from './dto/create-srp.dto';
import { UpdateSrpDto } from './dto/update-srp.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class SrpService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(itemCode: string, ItemsPerUnit: number, UoM: string, taxCode: string, lowerbound: number, vendorCode: string, PriceListNum: number) {
    const uom = await this.dataSource.query(
      ` SELECT dbo.fn_GetSRP ('${itemCode}', ${ItemsPerUnit}, '${UoM}','${taxCode}', ${lowerbound}, '${vendorCode}',${PriceListNum}) AS SRP`
    );
    return uom;
  }
}