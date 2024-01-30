import { Injectable } from '@nestjs/common';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class CostService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(itemCode: string, warehouseCode: string) {
    const uom = await this.dataSource.query(
      ` SELECT dbo.fn_GetCost ('${itemCode}', '${warehouseCode}') AS Cost`
    );
    return uom;
  }
}
