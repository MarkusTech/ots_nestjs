import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksAvailabilityService } from './stocks-availability.service';
import { CreateStocksAvailabilityDto } from './dto/create-stocks-availability.dto';
import { UpdateStocksAvailabilityDto } from './dto/update-stocks-availability.dto';

@Controller('stocks-availability')
export class StocksAvailabilityController {
  constructor(private readonly stocksAvailabilityService: StocksAvailabilityService) {}

  @Get(':docNum/:itemCode/:warehouseCode/:ordrQty/:ExcludeBO')
  async findBy(@Param('docNum') docNum: number, @Param('itemCode') itemCode: string, @Param('warehouseCode') warehouseCode: string, @Param('ordrQty') ordrQty: number, @Param('ExcludeBO') ExcludeBO: string){
    return await this.stocksAvailabilityService.findAll(docNum,itemCode,warehouseCode,ordrQty,ExcludeBO);
  }
}
