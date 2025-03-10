// src/typeorm.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ExchangeRate } from './exchange-rate/entities/exchange-rate.entity';
import { InflationRate } from './inflation-rate/entities/inflation-rate.entity';
import { Client } from './clients/entities/client.entity';
import { FinancialHealth } from './financial-health/entities/financial-health.entity';
import { CreditHistory } from './credit-history/entities/credit-history.entity';
import { Log } from './logs/entities/log.entity';

import * as dotenv from 'dotenv';
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as 'mssql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ExchangeRate, InflationRate, Client, FinancialHealth, CreditHistory, Log],
  logging: ["query","error"],
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  },
};