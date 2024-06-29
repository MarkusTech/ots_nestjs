import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickupLocationService } from './pickup-location.service';
import { PickupLocationController } from './pickup-location.controller';
import { PickUpLocation } from './entities/pickup-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickUpLocation])],
  providers: [PickupLocationService],
  controllers: [PickupLocationController]
})
export class PickupLocationModule {}


