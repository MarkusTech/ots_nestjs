import { Module } from '@nestjs/common';
import { TransacDetailsService } from './transac_details.service';
import { TransacDetailsController } from './transac_details.controller';

@Module({
  controllers: [TransacDetailsController],
  providers: [TransacDetailsService],
})
export class TransacDetailsModule {}
