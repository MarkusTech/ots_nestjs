import { Module } from '@nestjs/common';
import { StocksAvailabilityService } from './stocks-availability.service';
import { StocksAvailabilityController } from './stocks-availability.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StocksAvailability } from './entities/stocks-availability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StocksAvailability])],
  controllers: [StocksAvailabilityController],
  providers: [StocksAvailabilityService],
})
export class StocksAvailabilityModule {}