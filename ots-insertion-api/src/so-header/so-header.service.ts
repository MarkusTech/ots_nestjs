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
    const {EntryNum, DocNum,PostingDate,DocDate,CustomerCode,CustomerName,WalkInName,ShippingAdd,TIN,Reference,SCPWDIdNo,Branch,DocStat,BaseDoc,Cash,CreditCard,DebitCard,ODC,PDC,OnlineTransfer,OnAccount,COD,TotalAmtBefTax,TotalTax,TotalAmtAftTax,SCPWDDiscTotal,TotalAmtDue,Remarks,CreatedBy,DateCreated,UpdatedBy,DateUpdated, SalesCrew, ForeignName} = createSoHeaderDto;

    const header = await this.dataSource.query(`EXEC SP_ADD_SO_HEADER '${EntryNum}', ${DocNum},'${PostingDate}','${DocDate}','${CustomerCode}','${CustomerName}','${WalkInName}','${ShippingAdd}','${TIN}','${Reference}','${SCPWDIdNo}','${Branch}','${DocStat}',${BaseDoc},'${Cash}','${CreditCard}','${DebitCard}','${ODC}','${PDC}','${OnlineTransfer}','${OnAccount}','${COD}',${TotalAmtBefTax},${TotalTax},${TotalAmtAftTax},${SCPWDDiscTotal},${TotalAmtDue},'${Remarks}',${CreatedBy},'${DateCreated}',${UpdatedBy},'${DateUpdated}', '${SalesCrew}', '${ForeignName}'`);
    return {header} ;
  }

  async find(user: string) {
    const header = await this.dataSource.query(
      `SELECT * FROM SO_Header WHERE DraftNum IN (SELECT MAX(DraftNum) FROM SO_Header WHERE CreatedBy='${user}')`
    );
    return header;
  }

  async findAll() {
    const header = await this.dataSource.query(
      `SELECT * FROM SO_Header`
    );
    return header;
  }

  // UPDATE HEADER
  async update(UpdateSoHeaderDto: UpdateSoHeaderDto, DraftNum: number) {
    const {EntryNum, DocNum,PostingDate,DocDate,CustomerCode,CustomerName,WalkInName,ShippingAdd,TIN,Reference,SCPWDIdNo,Branch,DocStat,BaseDoc,Cash,CreditCard,DebitCard,ODC,PDC,OnlineTransfer,OnAccount,COD,TotalAmtBefTax,TotalTax,TotalAmtAftTax,SCPWDDiscTotal,TotalAmtDue,Remarks,CreatedBy,DateCreated,UpdatedBy,DateUpdated} = UpdateSoHeaderDto;

    const header = await this.dataSource.query(`SP_UPDATE_HEADER '${EntryNum}', ${DocNum},'${PostingDate}','${DocDate}','${CustomerCode}','${CustomerName}','${WalkInName}','${ShippingAdd}','${TIN}','${Reference}','${SCPWDIdNo}','${Branch}','${DocStat}',${BaseDoc},'${Cash}','${CreditCard}','${DebitCard}','${ODC}','${PDC}','${OnlineTransfer}','${OnAccount}','${COD}',${TotalAmtBefTax},${TotalTax},${TotalAmtAftTax},${SCPWDDiscTotal},${TotalAmtDue},'${Remarks}',${CreatedBy},'${DateCreated}',${UpdatedBy},'${DateUpdated}', ${DraftNum}`);
    return {header} ;
  }
}
