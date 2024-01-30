import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxRateService } from './tax-rate.service';
import { CreateTaxRateDto } from './dto/create-tax-rate.dto';
import { UpdateTaxRateDto } from './dto/update-tax-rate.dto';

@Controller('tax-rate')
export class TaxRateController {
  constructor(private readonly taxRateService: TaxRateService) {}

  @Get(':taxCode')
  async findBy(@Param('taxCode') taxCode: string){
    return await this.taxRateService.findAll(taxCode);
  }
}
