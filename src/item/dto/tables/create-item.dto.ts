/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  itemid: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  itemname: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  oum: string;

  @Column({
    type: 'float',
  })
  unitprice: Float64Array;
  quantity: Float64Array;
}