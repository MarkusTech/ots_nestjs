import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LowerboundService } from './lowerbound.service';

@Controller('lowerbound')
export class LowerboundController {
  constructor(private readonly lowerboundService: LowerboundService) {}

  @Get(':PriceListNum/:taxCode/:itemCode/:warehouseCode/:UoMQty')
  async findBy(@Param('PriceListNum') PriceListNum: number, @Param('taxCode') taxCode: string, @Param('itemCode') itemCode: string , @Param('warehouseCode') warehouseCode: string, @Param('UoMQty') UoMQty: number){
    return await this.lowerboundService.findAll(PriceListNum,taxCode,itemCode,warehouseCode,UoMQty);
  }
}