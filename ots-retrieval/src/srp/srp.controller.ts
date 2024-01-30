import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SrpService } from './srp.service';
import { CreateSrpDto } from './dto/create-srp.dto';
import { UpdateSrpDto } from './dto/update-srp.dto';

@Controller('srp')
export class SrpController {
  constructor(private readonly srpService: SrpService) {}

  @Get(':itemCode/:ItemsPerUnit/:UoM/:taxCode/:lowerbound/:vendorCode/:PriceListNum')
  async findBy(@Param('itemCode') itemCode: string, @Param('ItemsPerUnit') ItemsPerUnit: number, @Param('UoM') UoM: string,
               @Param('taxCode') taxCode: string, @Param('lowerbound') lowerbound: number, @Param('vendorCode') vendorCode: string,
               @Param('PriceListNum') PriceListNum: number){

    return await this.srpService.findAll(itemCode,ItemsPerUnit,UoM,taxCode,lowerbound,vendorCode,PriceListNum);
  }
}
