import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionHeaderService } from './transaction_header.service';
import { TransactionHeader } from './dto/tables/create-transaction_header.dto';
import { UpdateTransactionHeaderDto } from './dto/update-transaction_header.dto';

@Controller('transaction-header')
export class TransactionHeaderController {
  constructor(
    private readonly transactionHeaderService: TransactionHeaderService,
  ) {}

  @Post()
  create(@Body() createTransactionHeaderDto: TransactionHeader) {
    return this.transactionHeaderService.create(createTransactionHeaderDto);
  }

  @Get()
  findAll() {
    return this.transactionHeaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionHeaderService.findOne(+id);
  }

  @Patch('save:id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionHeaderDto: UpdateTransactionHeaderDto,
  ) {
    return this.transactionHeaderService.update(
      +id,
      updateTransactionHeaderDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionHeaderService.remove(+id);
  }
}
