import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxCodeService } from './tax-code.service';

@Controller('tax-code')
export class TaxCodeController {
  constructor(private readonly taxCodeService: TaxCodeService) {}

  @Get(':cardCode/:warehouseCode')
  async findBy(@Param('cardCode') cardCode: string , @Param('warehouseCode') warehouseCode: string){
    return await this.taxCodeService.findAll(cardCode,warehouseCode);
  }
}
