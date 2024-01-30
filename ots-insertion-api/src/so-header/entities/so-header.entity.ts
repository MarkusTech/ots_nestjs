import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'SO_Header'})
export class SoHeader {
    @PrimaryGeneratedColumn({name: 'DraftNum'})
    DraftNum: number;

    @Column({name: 'EntryNum'})
    EntryNum: string;

    @Column({name: 'DocNum'})
	DocNum: number;

    @Column({name: 'PostingDate'})
    PostingDate: string;

    @Column({name: 'DocDate'})
    DocDate: string;

    @Column({name: 'CustomerCode'})
    CustomerCode: string;

    @Column({name: 'CustomerName'})
    CustomerName: string;

    @Column({name: 'WalkInName'})
    WalkInName: string;

    @Column({name: 'ShippingAdd'})
    ShippingAdd: string;

    @Column({name: 'TIN'})
    TIN : string;

    @Column({name: 'Reference'})
    Reference: string;

    @Column({name: 'SCPWDIdNo'})
    SCPWDIdNo: string;

    @Column({name: 'Branch'})
    Branch : string;

    @Column({name: 'DocStat'})
    DocStat: string;

    @Column({name: 'BaseDoc'})
    BaseDoc:number;

    @Column({name: 'Cash'})
    Cash: string;

    @Column({name: 'CreditCard'})
    CreditCard : string;

    @Column({name: 'DebitCard'})
    DebitCard: string;

    @Column({name: 'ODC'})
    ODC: string;

    @Column({name: 'PDC'})
    PDC: string;

    @Column({name: 'OnlineTransfer'})
    OnlineTransfer: string;

    @Column({name: 'OnAccount'})
    OnAccount: string;

    @Column({name: 'COD'})
    COD: string;

    @Column({name: 'TotalAmtBefTax', type: "float"})
    TotalAmtBefTax: number;

    @Column({name: 'TotalTax', type: "float"})
    TotalTax: number;

    @Column({name: 'TotalAmtAftTax', type: "float"})
    TotalAmtAftTax: number;

    @Column({name: 'SCPWDDiscTotal', type: "float"})
    SCPWDDiscTotal: number;

    @Column({name: 'TotalAmtDue', type: "float"})
    TotalAmtDue: number;

    @Column({name: 'Remarks'})
    Remarks: string;

    @Column({name: 'CreatedBy'})
    CreatedBy: number;

    @Column({name: 'DateCreated'})
    DateCreated : string;

    @Column({name: 'UpdatedBy'})
    UpdatedBy: number;

    @Column({name: 'DateUpdated'})
    DateUpdated : string;
}
