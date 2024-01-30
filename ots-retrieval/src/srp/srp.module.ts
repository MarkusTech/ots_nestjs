import { Module } from '@nestjs/common';
import { SrpService } from './srp.service';
import { SrpController } from './srp.controller';
import { Srp } from './entities/srp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Srp])],
  controllers: [SrpController],
  providers: [SrpService],
})
export class SrpModule {}
