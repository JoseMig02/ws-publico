import { Module } from '@nestjs/common';
import { LogsController } from './logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { ServiceLog } from './logs.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logs.interceptor';

@Module({
  imports:[TypeOrmModule.forFeature([Log])],
  controllers: [LogsController],
  providers: [ServiceLog,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [ServiceLog], 
})
export class LogsModule {}
