import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './dto/tables/create-item.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
