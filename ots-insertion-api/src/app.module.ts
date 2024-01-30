import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoHeaderModule } from './so-header/so-header.module';
import { SoDetailsModule } from './so-details/so-details.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: 'p@ssw0rd',
    database: 'OTS_DB',
    autoLoadEntities: true,
    synchronize: false,
    logging: true,

    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  
  }), SoHeaderModule, SoDetailsModule]
  ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
