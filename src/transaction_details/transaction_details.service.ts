/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Transaction_Detail } from './dto/tables/create-transaction_detail.dto';
import { UpdateTransactionDetailDto } from './dto/update-transaction_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddTransDetails } from './dto/queries/add-transdetails';
import { Items } from 'src/item/dto/tables/create-item.dto';

@Injectable()
export class TransactionDetailsService {
  constructor(
    @InjectRepository(Transaction_Detail)
    private transactionDetailRepository: Repository<Transaction_Detail>,
  ) {}

  async create(createTransactionDetailDto: AddTransDetails) {
    return this.transactionDetailRepository.save(createTransactionDetailDto);
  }

  findAll() {
    return this.transactionDetailRepository.find();
  }

  findOne(transid: string) {
    return this.transactionDetailRepository.findOneByOrFail({
      lineid: transid,
    });
  }

  findAllByTransid(transidfk: string) {
    return this.transactionDetailRepository.find({
      where: { transidfk: transidfk },
    });
  }

  // async findAllByTransid(transidfk: string): Promise<Items[]> {
  //   return this.transactionDetailRepository
  //     .createQueryBuilder('transactionDetail')
  //     .innerJoinAndSelect('transactionDetail.item', 'item')
  //     .where('transactionDetail.transidfk = :transidfk', { transidfk })
  //     .getMany()
  //     .then((transactionDetails) => {
  //       // Extract the associated items from transaction details
  //       return transactionDetails.map((detail) => detail.items);
  //     });
  // }

  // async calculateTotal(transidfk: string): Promise<number> {
  //   const transactionDetails = await this.findAllByTransid(transidfk);

  //   const total = transactionDetails.reduce((acc, detail) => {
  //     return acc + detail.unitprice
  //   }, 0);

  //   return total;

  // }
  // return this.transactionDetailRepository
  //     .createQueryBuilder('transactionDetail')
  //     .innerJoinAndSelect('transactionDetail.item', 'item')
  //     .where('transactionDetail.transidfk = :transidfk', { transidfk })
  //     .getMany();

  update(id: number, _updateTransactionDetailDto: UpdateTransactionDetailDto) {
    return `This action updates a #${id} transactionDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionDetail`;
  }
}
