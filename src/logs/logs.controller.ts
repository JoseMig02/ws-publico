import { Controller, Get } from '@nestjs/common';
import { ServiceLog } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly serviceLog: ServiceLog) {}

  @Get()
  async getAllLogs() {
    return await this.serviceLog.getLogs();
  }

  @Get('/stats')
  async getStats() {
    return await this.serviceLog.getStatistics();
  }
}
