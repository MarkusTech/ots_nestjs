import { Module } from '@nestjs/common';
import { SoHeaderService } from './so-header.service';
import { SoHeaderController } from './so-header.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoHeader } from './entities/so-header.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SoHeader])],
  controllers: [SoHeaderController],
  providers: [SoHeaderService],
})
export class SoHeaderModule {}
