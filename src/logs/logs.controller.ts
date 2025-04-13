import { Controller, Get, Query } from '@nestjs/common';
import { ServiceLog } from './logs.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('logs')
export class LogsController {
  constructor(private readonly serviceLog: ServiceLog) {}

  @Get()
  @ApiQuery({ name: 'from', required: false, description: 'Fecha de inicio del filtro' })
  @ApiQuery({ name: 'to', required: false, description: 'Fecha final del filtro' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Página de resultados', example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Número de resultados por página', example: 10 })
  async getAllLogs(
    @Query('from') from: string, 
    @Query('to') to: string, 
    @Query('page') page: number = 1,   
    @Query('limit') limit: number = 10
  ) {
    return await this.serviceLog.getLogs(from, to, page, limit);
  }
  @Get('/stats')
  async getStats() {
    return await this.serviceLog.getStatistics();
  }
}
