import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PickupLocationService {
    constructor(
        private readonly dataSource:DataSource
    ){}
    async getPickupLocation(ItemCode: string, Qty: number, Whs: string): Promise<any> {
        const query = `SELECT dbo.fn_GetPickUpLocation('${ItemCode}', ${Qty}, '${Whs}') AS location`;
        const result = await this.dataSource.query(query);
        return result[0].location;
    }
}
