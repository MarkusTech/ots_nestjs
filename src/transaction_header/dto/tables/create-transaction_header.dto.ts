import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionHeader {
  @PrimaryGeneratedColumn()
  transid: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  customer: string;

  @Column({
    type: 'datetime',
  })
  date: Date;

  @Column({
    type: 'float',
  })
  total: Float64Array;
}
