import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';
import { UomModule } from './uom/uom.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LowerboundModule } from './lowerbound/lowerbound.module';
import { DiscountPriceModule } from './discount-price/discount-price.module';
import { TaxCodeModule } from './tax-code/tax-code.module';
import { TaxRateModule } from './tax-rate/tax-rate.module';
import { WarehouseSohModule } from './warehouse-soh/warehouse-soh.module';
import { SrpModule } from './srp/srp.module';
import { CostModule } from './cost/cost.module';
import { StocksAvailabilityModule } from './stocks-availability/stocks-availability.module';
import { ScDiscountModule } from './sc-discount/sc-discount.module';
import { SalescrewModule } from './salescrew/salescrew.module';
import { PickupLocationModule } from './pickup-location/pickup-location.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: 'p@ssw0rd',
    database: 'BCD_TEST_DB',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,

    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  
  })
  ,CustomerModule, ItemModule, UomModule, LowerboundModule, DiscountPriceModule, TaxCodeModule, TaxRateModule, WarehouseSohModule, SrpModule, CostModule, StocksAvailabilityModule, ScDiscountModule, SalescrewModule, PickupLocationModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
