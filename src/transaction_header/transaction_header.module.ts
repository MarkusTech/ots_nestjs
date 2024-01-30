import { Module } from '@nestjs/common';
import { TransactionHeaderService } from './transaction_header.service';
import { TransactionHeaderController } from './transaction_header.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionHeader } from './dto/tables/create-transaction_header.dto';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionHeader])],
  controllers: [TransactionHeaderController],
  providers: [TransactionHeaderService],
})
export class TransactionHeaderModule {}
