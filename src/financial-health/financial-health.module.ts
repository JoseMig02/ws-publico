import { Module } from '@nestjs/common';
import { FinancialHealthService } from './financial-health.service';
import { FinancialHealthController } from './financial-health.controller';

@Module({
  controllers: [FinancialHealthController],
  providers: [FinancialHealthService],
})
export class FinancialHealthModule {}
