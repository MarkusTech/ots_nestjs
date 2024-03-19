// salescrew.service.ts
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SalescrewService {
  // constructor(
  //   @InjectRepository(Salescrew)
  //   private readonly salescrewRepository: Repository<Salescrew>,
  // ) {}
  constructor(
    private readonly dataSource: DataSource
  ){}

  async findAll() {
    const salescrew = await this.dataSource.query(
      `SELECT DISTINCT T2.SlpName
      FROM OUSR T0
      INNER JOIN OUDG T1 ON T0.DfltsGroup = T1.Code
      INNER JOIN OSLP T2 ON T2.Memo = T1.Warehouse
      WHERE T0.INTERNAL_K =  29
      ORDER BY T2.SLPNAME ASC`
    );
    return salescrew;
  }
}
