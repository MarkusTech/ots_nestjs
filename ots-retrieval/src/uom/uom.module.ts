import { Module } from '@nestjs/common';
import { UomService } from './uom.service';
import { UomController } from './uom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uom } from './entities/uom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Uom])],
  controllers: [UomController],
  providers: [UomService],
})
export class UomModule {}
