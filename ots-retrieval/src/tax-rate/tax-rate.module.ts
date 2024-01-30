import { Module } from '@nestjs/common';
import { TaxRateService } from './tax-rate.service';
import { TaxRateController } from './tax-rate.controller';
import { TaxRate } from './entities/tax-rate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaxRate])],
  controllers: [TaxRateController],
  providers: [TaxRateService],
})
export class TaxRateModule {}
