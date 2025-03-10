import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { ConfigModule } from '@nestjs/config';  
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { InflationRateModule } from './inflation-rate/inflation-rate.module';
import { FinancialHealthModule } from './financial-health/financial-health.module';
import { CreditHistoryModule } from './credit-history/credit-history.module';
import { ClientsModule } from './clients/clients.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    ExchangeRateModule,
    InflationRateModule,
    FinancialHealthModule,
    CreditHistoryModule,
    ClientsModule,
    LogsModule,
  ],
  exports: [TypeOrmModule], 
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
