import { Module } from '@nestjs/common';
import { TaxCodeService } from './tax-code.service';
import { TaxCodeController } from './tax-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxCode } from './entities/tax-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxCode])],
  controllers: [TaxCodeController],
  providers: [TaxCodeService],
})
export class TaxCodeModule {}
