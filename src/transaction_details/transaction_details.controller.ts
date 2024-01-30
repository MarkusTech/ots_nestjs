import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionDetailsService } from './transaction_details.service';
import { Transaction_Detail } from './dto/tables/create-transaction_detail.dto';
import { UpdateTransactionDetailDto } from './dto/update-transaction_detail.dto';

@Controller('transaction-details')
export class TransactionDetailsController {
  constructor(
    private readonly transactionDetailsService: TransactionDetailsService,
  ) {}

  @Post()
  create(@Body() createTransactionDetailDto: Transaction_Detail) {
    return this.transactionDetailsService.create(createTransactionDetailDto);
  }

  @Get()
  findAll() {
    return this.transactionDetailsService.findAll();
  }

  @Get('/detailsbyuser/:transidfk')
  findByUserid(@Param('transidfk') transidfk: string) {
    return this.transactionDetailsService.findAllByTransid(transidfk);
  }

  @Get(':transid')
  findOne(@Param('transid') transid: string) {
    return this.transactionDetailsService.findOne(transid);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDetailDto: UpdateTransactionDetailDto,
  ) {
    return this.transactionDetailsService.update(
      +id,
      updateTransactionDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionDetailsService.remove(+id);
  }
}
