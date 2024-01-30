import { Module } from '@nestjs/common';
import { WarehouseSohService } from './warehouse-soh.service';
import { WarehouseSohController } from './warehouse-soh.controller';
import { WarehouseSoh } from './entities/warehouse-soh.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseSoh])],
  controllers: [WarehouseSohController],
  providers: [WarehouseSohService],
})
export class WarehouseSohModule {}
