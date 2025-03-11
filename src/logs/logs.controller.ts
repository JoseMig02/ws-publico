import { Controller, Get, Query } from '@nestjs/common';
import { ServiceLog } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly serviceLog: ServiceLog) {}

  @Get()
  async getAllLogs(@Query('from') from: string, @Query('to') to: string) {
    return await this.serviceLog.getLogs(from, to);
  }
  @Get('/stats')
  async getStats() {
    return await this.serviceLog.getStatistics();
  }
}
