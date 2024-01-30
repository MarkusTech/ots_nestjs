import { Module } from '@nestjs/common';
import { TransactionDetailsService } from './transaction_details.service';
import { TransactionDetailsController } from './transaction_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction_Detail } from './dto/tables/create-transaction_detail.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction_Detail])],
  controllers: [TransactionDetailsController],
  providers: [TransactionDetailsService],
})
export class TransactionDetailsModule {}
