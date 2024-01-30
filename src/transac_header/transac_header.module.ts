import { Module } from '@nestjs/common';
import { TransacHeaderService } from './transac_header.service';
import { TransacHeaderController } from './transac_header.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransacHeaderDto } from './dto/create-transac_header.dto';

@Module({
  imports: [TypeOrmModule.forFeature([TransacHeaderDto])],
  controllers: [TransacHeaderController],
  providers: [TransacHeaderService],
})
export class TransacHeaderModule {}
