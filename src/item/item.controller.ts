/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { AddItem } from './dto/queries/add-item';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() addItem: AddItem) {
    return this.itemService.create(addItem);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Patch('/updateItem/:id')
  update(@Param('id') id: string, @Body() updateItemDto: AddItem) {
    return this.itemService.update(id, updateItemDto);
  }

  @Get('/findItem/:itemid')
  findOne(@Param('itemid') itemid: string) {
    return this.itemService.findOne(itemid);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
