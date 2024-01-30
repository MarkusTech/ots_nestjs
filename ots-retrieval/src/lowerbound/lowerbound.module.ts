import { Module } from '@nestjs/common';
import { LowerboundService } from './lowerbound.service';
import { LowerboundController } from './lowerbound.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lowerbound } from './entities/lowerbound.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lowerbound])],
  controllers: [LowerboundController],
  providers: [LowerboundService],
})
export class LowerboundModule {}
