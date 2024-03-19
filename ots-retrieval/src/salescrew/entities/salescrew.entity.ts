// salescrew.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Salescrew {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slpName: string;
}
