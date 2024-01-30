import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WarehouseSohService } from './warehouse-soh.service';
import { CreateWarehouseSohDto } from './dto/create-warehouse-soh.dto';
import { UpdateWarehouseSohDto } from './dto/update-warehouse-soh.dto';

@Controller('warehouse-soh')
export class WarehouseSohController {
  constructor(private readonly warehouseSohService: WarehouseSohService) {}

  @Get(':itemCode/:UoM/:branchID')
  async findBy(@Param('itemCode') itemCode: string,@Param('UoM') UoM: string,@Param('branchID') branchID: number){
    return await this.warehouseSohService.findAll(itemCode, UoM, branchID);
  }
}
