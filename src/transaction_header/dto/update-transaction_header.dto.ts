import { PartialType } from '@nestjs/mapped-types';
import { TransactionHeader } from './tables/create-transaction_header.dto';

export class UpdateTransactionHeaderDto extends PartialType(
  TransactionHeader,
) {}
