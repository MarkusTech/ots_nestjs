import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScDiscountService } from './sc-discount.service';
import { CreateScDiscountDto } from './dto/create-sc-discount.dto';
import { UpdateScDiscountDto } from './dto/update-sc-discount.dto';

@Controller('sc-discount')
export class ScDiscountController {
  constructor(private readonly scDiscountService: ScDiscountService) {}

  @Get(':cardCode/:itemCode')
  async findBy(@Param('cardCode') cardCode: string, @Param('itemCode') itemCode: string){
    return await this.scDiscountService.findAll(cardCode,itemCode);
  }
}
