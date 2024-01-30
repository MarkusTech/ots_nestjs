import { Injectable } from '@nestjs/common';
import { CreateSoDetailDto } from './dto/create-so-detail.dto';
import { UpdateSoDetailDto } from './dto/update-so-detail.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SoDetail } from './entities/so-detail.entity';

@Injectable()
export class SoDetailsService {

  constructor(
    @InjectRepository(SoDetail)
    private readonly SoHeaderRepo: Repository<SoDetail>,
    private readonly dataSource: DataSource
  ){}

  async create(createSoDetailDto: CreateSoDetailDto) {
    const {EntryNum,ItemCode,ItemName,Quantity,UoM,UoMConv,Whs,InvStat,SellPriceBefDisc,DiscRate,SellPriceAftDisc,LowerBound,TaxCode,TaxCodePerc,TaxAmt,BelPriceDisc,Cost,BelCost,ModeReleasing,SCPWDdisc,GrossTotal} = createSoDetailDto;

    const detail = await this.dataSource.query(`SP_ADD_SO_DETAILS ${EntryNum},'${ItemCode}','${ItemName}',${Quantity},'${UoM}',${UoMConv},'${Whs}','${InvStat}',${SellPriceBefDisc},${DiscRate},${SellPriceAftDisc},${LowerBound},'${TaxCode}',${TaxCodePerc},${TaxAmt},${BelPriceDisc},${Cost},${BelCost},'${ModeReleasing}','${SCPWDdisc}',${GrossTotal}`);
    return {detail} ;
  }
}
