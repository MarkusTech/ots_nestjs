// salescrew.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalescrewController } from './salescrew.controller';
import { SalescrewService } from './salescrew.service';
import { Salescrew } from './entities/salescrew.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salescrew])],
  controllers: [SalescrewController],
  providers: [SalescrewService],
})
export class SalescrewModule {}
