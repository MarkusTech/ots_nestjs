import { PartialType } from '@nestjs/mapped-types';
import { Transaction_Detail } from './tables/create-transaction_detail.dto';

export class UpdateTransactionDetailDto extends PartialType(
  Transaction_Detail,
) {}
