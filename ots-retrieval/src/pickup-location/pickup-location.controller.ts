import { Controller, Get, Query, Param } from '@nestjs/common';
import { PickupLocationService } from './pickup-location.service';

@Controller('pickup-location')
export class PickupLocationController {
    constructor(private readonly pickupLocationService: PickupLocationService) {}
    @Get(':ItemCode/:Qty/:Whs')
    async getPickupLocation(
        @Param('ItemCode') ItemCode: string,
        @Param('Qty') Qty: number,
        @Param('Whs') Whs: string,
    ): Promise<any> {
         return this.pickupLocationService.getPickupLocation(ItemCode, Qty, Whs);
    }
}
