import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostService } from './cost.service';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get(':itemCode/:warehouseCode')
  async findBy(@Param('itemCode') itemCode: string, @Param('warehouseCode') warehouseCode: string){
    return await this.costService.findAll(itemCode,warehouseCode);
  }
  
}
