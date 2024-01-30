import { Items } from 'src/item/dto/tables/create-item.dto';
import { TransactionHeader } from 'src/transaction_header/dto/tables/create-transaction_header.dto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction_Detail {
  @PrimaryGeneratedColumn()
  lineid: string;

  @Column({
    type: 'float',
  })
  qty: Float64Array;

  @Column({
    type: 'float',
  })
  unitprice: Float64Array;

  @Column({
    type: 'varchar',
  })
  transidfk: string;

  @Column({
    type: 'varchar',
  })
  itemfk: string;

  @ManyToOne(() => Items, (items) => items.itemid)
  @JoinColumn({ name: 'itemfk' })
  items: Items;

  @ManyToOne(
    () => TransactionHeader,
    (transactionheader) => transactionheader.transid,
  )
  @JoinColumn({ name: 'transidfk' })
  transactionheader: TransactionHeader;
}
