import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  // @Post()
  // create(@Body() createItemDto: CreateItemDto) {
  //   return this.itemService.create(createItemDto);
  // }

  @Get(':priceList/:warehouseCode/:cardCode')
  async findBy(@Param('priceList') priceList: number, @Param('warehouseCode') warehouseCode: string,@Param('cardCode') cardCode: string){
    return await this.itemService.findAll(priceList,warehouseCode,cardCode);
  }
}
