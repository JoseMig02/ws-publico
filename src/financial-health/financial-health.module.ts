import { Module } from '@nestjs/common';
import { FinancialHealthService } from './financial-health.service';
import { FinancialHealthController } from './financial-health.controller';
import { FinancialHealth } from './entities/financial-health.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/clients/entities/client.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([FinancialHealth, Client])
  ],
  controllers: [FinancialHealthController],
  providers: [FinancialHealthService],
})
export class FinancialHealthModule {}
