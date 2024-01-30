import { Injectable } from '@nestjs/common';
import { CreateSoHeaderDto } from './dto/create-so-header.dto';
import { UpdateSoHeaderDto } from './dto/update-so-header.dto';
import { SoHeader } from './entities/so-header.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SoHeaderService {

  constructor(
    @InjectRepository(SoHeader)
    private readonly SoHeaderRepo: Repository<SoHeader>,
    private readonly dataSource: DataSource
  ){}

  async create(createSoHeaderDto: CreateSoHeaderDto) {
    const {EntryNum, DocNum,PostingDate,DocDate,CustomerCode,CustomerName,WalkInName,ShippingAdd,TIN,Reference,SCPWDIdNo,Branch,DocStat,BaseDoc,Cash,CreditCard,DebitCard,ODC,PDC,OnlineTransfer,OnAccount,COD,TotalAmtBefTax,TotalTax,TotalAmtAftTax,SCPWDDiscTotal,TotalAmtDue,Remarks,CreatedBy,DateCreated,UpdatedBy,DateUpdated} = createSoHeaderDto;

    const header = await this.dataSource.query(`EXEC SP_ADD_SO_HEADER '${EntryNum}', ${DocNum},'${PostingDate}','${DocDate}','${CustomerCode}','${CustomerName}','${WalkInName}','${ShippingAdd}','${TIN}','${Reference}','${SCPWDIdNo}','${Branch}','${DocStat}',${BaseDoc},'${Cash}','${CreditCard}','${DebitCard}','${ODC}','${PDC}','${OnlineTransfer}','${OnAccount}','${COD}',${TotalAmtBefTax},${TotalTax},${TotalAmtAftTax},${SCPWDDiscTotal},${TotalAmtDue},'${Remarks}',${CreatedBy},'${DateCreated}',${UpdatedBy},'${DateUpdated}'`);
    return {header} ;
  }
}
