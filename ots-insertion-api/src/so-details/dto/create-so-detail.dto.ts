export class CreateSoDetailDto {
    DraftNum: string;
    ItemCode: string;
    ItemName: string;
    Quantity: number;
    UoM: string;
    UoMConv: number;
    Whse: string;
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
    BelCost: string;
    ModeReleasing: string;
    SCPWDdisc: string;
    GrossTotal: number;
}
