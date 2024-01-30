import { Injectable } from '@nestjs/common';
import { CreateStocksAvailabilityDto } from './dto/create-stocks-availability.dto';
import { UpdateStocksAvailabilityDto } from './dto/update-stocks-availability.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class StocksAvailabilityService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(docNum: number,itemCode: string, warehouseCode: string, ordrQty: number, ExcludeBO: string) {
    const availability = await this.dataSource.query(
      ` SELECT dbo.fn_GetAvailability (${docNum}, '${itemCode}', '${warehouseCode}', ${ordrQty}, '${ExcludeBO}') AS StockAvailable`
    );
    return availability;
  }
}
