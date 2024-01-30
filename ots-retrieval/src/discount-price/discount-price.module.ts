import { Module } from '@nestjs/common';
import { DiscountPriceService } from './discount-price.service';
import { DiscountPriceController } from './discount-price.controller';
import { DiscountPrice } from './entities/discount-price.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountPrice])],
  controllers: [DiscountPriceController],
  providers: [DiscountPriceService],
})
export class DiscountPriceModule {}
