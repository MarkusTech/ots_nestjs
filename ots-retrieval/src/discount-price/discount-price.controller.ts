import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountPriceService } from './discount-price.service';
import { before } from 'node:test';

@Controller('discount-price')
export class DiscountPriceController {
  constructor(private readonly discountPriceService: DiscountPriceService) {}

  @Get(':brachID/:beforeDiscount/:cardCode/:itemCode/:Qty/:UoM/:lowerBound/:creditCard/:debitCard/:PDC/:PO/:taxCode')
  async findBy(@Param('brachID') brachID: number, @Param('beforeDiscount') beforeDiscount: number,@Param('cardCode') cardCode : string, 
                @Param('itemCode') itemCode: string,@Param('Qty') Qty: number,@Param('UoM') UoM: string, @Param('lowerBound') lowerBound: string, 
                  @Param('creditCard')creditCard: string, @Param('debitCard') debitCard: string, @Param('PDC') PDC: string, @Param('PO') PO: string, 
                  @Param('taxCode') taxCode: string){
    return await this.discountPriceService.findAll(brachID, beforeDiscount, cardCode, itemCode, Qty, UoM,lowerBound,creditCard,debitCard,PDC,PO,taxCode);
  }
}