import { Injectable } from '@nestjs/common';
import { CreateScDiscountDto } from './dto/create-sc-discount.dto';
import { UpdateScDiscountDto } from './dto/update-sc-discount.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class ScDiscountService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(cardCode: string, itemCode: string) {
    const discount = await this.dataSource.query(
      ` SELECT dbo.[fn_CheckIfSCPWD] ('${cardCode}','${itemCode}') AS SCDiscount`
    );
    return discount;
  }
}
