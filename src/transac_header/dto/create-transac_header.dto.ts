import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransacHeaderDto {
  @PrimaryGeneratedColumn()
  transid: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  transactionID: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  customer: string;

  @Column({
    type: 'date',
  })
  date: Date;

  @Column({
    type: 'float',
  })
  total: Float64Array;
}
