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
    const {DraftNum,ItemCode,ItemName,Quantity,UoM,UoMConv,Whse,InvStat,SellPriceBefDisc,DiscRate,SellPriceAftDisc,LowerBound,TaxCode,TaxCodePerc,TaxAmt,BelPriceDisc,Cost,BelCost,ModeReleasing,SCPWDdisc,GrossTotal} = createSoDetailDto;

    const detail = await this.dataSource.query(`SP_ADD_SO_DETAILS '${DraftNum}','${ItemCode}','${ItemName}',${Quantity},'${UoM}',${UoMConv},'${Whse}','${InvStat}',${SellPriceBefDisc},${DiscRate},${SellPriceAftDisc},${LowerBound},'${TaxCode}',${TaxCodePerc},${TaxAmt},${BelPriceDisc},${Cost},${BelCost},'${ModeReleasing}','${SCPWDdisc}',${GrossTotal}`);
    return {detail} ;
  }

  async findAll(){
    const detail = await this.dataSource.query(
      `SELECT * FROM SO_Details`
    );
    return detail;
  }

  // DELETE DETAILS
  async delete(DraftNum : string){
    const del = await this.dataSource.query(
      `exec SP_DELETE_DETAILS '${DraftNum}'`
    );
    return del;
  }
}
