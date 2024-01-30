export class CreateSoDetailDto {
    EntryNum: number;
    ItemCode: string;
    ItemName: string;
    Quantity: number;
    UoM: string;
    UoMConv: number;
    Whs: string;
    InvStat: string;
    SellPriceBefDisc: number;
    DiscRate: number;
    SellPriceAftDisc: number;
    LowerBound: number;
    TaxCode: string;
    TaxCodePerc: number;
    TaxAmt: number;
    BelPriceDisc: number;
    Cost: number;
    BelCost: number;
    ModeReleasing: string;
    SCPWDdisc: string;
    GrossTotal: number;
}
