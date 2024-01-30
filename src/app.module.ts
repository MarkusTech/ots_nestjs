import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './item/dto/tables/create-item.dto';
import { TransactionDetailsModule } from './transaction_details/transaction_details.module';
import { TransactionHeaderModule } from './transaction_header/transaction_header.module';
import { Transaction_Detail } from './transaction_details/dto/tables/create-transaction_detail.dto';
import { TransactionHeader } from './transaction_header/dto/tables/create-transaction_header.dto';
import { ItemModule } from './item/item.module';
import { TransacDetailsModule } from './transac_details/transac_details.module';
import { TransacHeaderModule } from './transac_header/transac_header.module';
import { TransacHeaderDto } from './transac_header/dto/create-transac_header.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '172.16.10.125',
      port: 1433,
      username: 'sa',
      password: 'p@ssw0rd',
      database: 'ots_dan',
      autoLoadEntities: true,
      entities: [
        Items,
        Transaction_Detail,
        TransactionHeader,
        TransacHeaderDto,
      ],
      synchronize: true,
      logging: true,

      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    }),
    TransactionDetailsModule,
    TransactionHeaderModule,
    ItemModule,
    TransacDetailsModule,
    TransacHeaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
