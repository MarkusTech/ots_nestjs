import { Module } from '@nestjs/common';
import { ScDiscountService } from './sc-discount.service';
import { ScDiscountController } from './sc-discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScDiscount } from './entities/sc-discount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScDiscount])],
  controllers: [ScDiscountController],
  providers: [ScDiscountService],
})
export class ScDiscountModule {}
