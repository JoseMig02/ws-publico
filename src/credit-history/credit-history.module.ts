import { Module } from '@nestjs/common';
import { CreditHistoryService } from './credit-history.service';
import { CreditHistoryController } from './credit-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditHistory } from './entities/credit-history.entity';
import { Client } from 'src/clients/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditHistory, Client]),
  ],
  controllers: [CreditHistoryController],
  providers: [CreditHistoryService,],
})
export class CreditHistoryModule { }
