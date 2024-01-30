/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { AddItem } from './dto/queries/add-item';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from './dto/tables/create-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Items) private itemRepository: Repository<Items>,
  ) {}

  async create(addItem: AddItem) {
    return this.itemRepository.save(addItem);
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(itemid: string) {
    return this.itemRepository.findOneByOrFail({ itemid: itemid });
  }

  update(id: string, updateItemDto: AddItem) {
    return this.itemRepository.update(id, updateItemDto);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
