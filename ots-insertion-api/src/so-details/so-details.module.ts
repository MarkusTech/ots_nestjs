import { Module } from '@nestjs/common';
import { SoDetailsService } from './so-details.service';
import { SoDetailsController } from './so-details.controller';
import { SoDetail } from './entities/so-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([SoDetail])],
  controllers: [SoDetailsController],
  providers: [SoDetailsService],
})
export class SoDetailsModule {}
