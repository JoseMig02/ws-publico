import { Module } from '@nestjs/common';
import { CreditHistoryService } from './credit-history.service';
import { CreditHistoryController } from './credit-history.controller';

@Module({
  controllers: [CreditHistoryController],
  providers: [CreditHistoryService],
})
export class CreditHistoryModule {}
