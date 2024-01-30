import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostController } from './cost.controller';
import { Cost } from './entities/cost.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cost])],
  controllers: [CostController],
  providers: [CostService],
})
export class CostModule {}
