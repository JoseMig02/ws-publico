// src/typeorm.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ExchangeRate } from './exchange-rate/entities/exchange-rate.entity';
import { InflationRate } from './inflation-rate/entities/inflation-rate.entity';
import { Client } from './clients/entities/client.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {

  type: 'mssql',
  host: "LAPTOP-DQRIJBVV" ,
  username: "jose" ,
  password: "1234567890" ,
  database: "ws-publicodb",
  entities: [ExchangeRate,InflationRate, Client],  
  logging: ['query', 'error'], //
  synchronize: true, 
  extra: {
    trustServerCertificate: true,
  },
};
