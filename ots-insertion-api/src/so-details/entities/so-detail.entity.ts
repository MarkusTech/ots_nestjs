import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'SO_Details'})
export class SoDetail {
    @PrimaryGeneratedColumn({name: 'LineID'})
    LineID: number;

    @Column({name: 'DraftNum'})
    DraftNum: string;
    
    @Column({name:'ItemCode'})
    ItemCode: string;

    @Column({name:'ItemName'})
    ItemName: string;

    @Column({name:'Quantity', type: "float"})
    Quantity: number

    @Column({name:'UoM'})
    UoM: string;

    @Column({name:'UoMConv', type: "float"})
    UoMConv: number;

    @Column({name:'Whse'})
    Whse: string;

    @Column({name:'InvStat'})
    InvStat: string;

    @Column({name:'SellPriceBefDisc', type: "float"})
    SellPriceBefDisc: number;

    @Column({name:'DiscRate', type: "float"})
    DiscRate: number;

    @Column({name:'SellPriceAftDisc', type: "float"})
    SellPriceAftDisc: number;

    @Column({name:'LowerBound', type: "float"})
    LowerBound: number;

    @Column({name:'TaxCode'})
    TaxCode: string;

    @Column({name:'TaxCodePerc', type: "float"})
    TaxCodePerc: number;

    @Column({name:'TaxAmt', type: "float"})
    TaxAmt: number;

    @Column({name:'BelPriceDisc', type: "float"})
    BelPriceDisc: number;

    @Column({name:'Cost', type: "float"})
    Cost: number;

    @Column({name:'BelCost', type: "float"})
    BelCost: string;

    @Column({name:'ModeReleasing'})
    ModeReleasing: string;

    @Column({name:'SCPWDdisc'})
    SCPWDdisc: string;

    @Column({name:'GrossTotal', type: "float"})
    GrossTotal: number;

    @Column({name:'TruckerForDropShipOrBackOrder', })
    TruckerForDropShipOrBackOrder: string;

    @Column({name: "PickUpLocation"})
    PickUpLocation: string;
}
