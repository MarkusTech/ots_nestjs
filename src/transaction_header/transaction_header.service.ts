/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { TransactionHeader } from './dto/tables/create-transaction_header.dto';
import { UpdateTransactionHeaderDto } from './dto/update-transaction_header.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionHeaderService {
  constructor(
    @InjectRepository(TransactionHeader)
    private transactionHeaderRepository: Repository<TransactionHeader>,
  ) {}

  create(createTransactionHeaderDto: TransactionHeader) {
    return this.transactionHeaderRepository.save(createTransactionHeaderDto);
  }

  findAll() {
    return this.transactionHeaderRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionHeader`;
  }

  update(id: number, updateTransactionHeaderDto: UpdateTransactionHeaderDto) {
    return `This action updates a #${id} transactionHeader`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionHeader`;
  }
}
