// src/financial-health/financial-health.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { FinancialHealthService } from './financial-health.service';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { FinancialHealthResponseDto } from './dto/financial-health-response.dto';

@Controller('financial-health')
export class FinancialHealthController {
  constructor(private readonly financialHealthService: FinancialHealthService) { }

  @Post()
  async createFinancialHealth(@Body() dto: CreateFinancialHealthDto): Promise<FinancialHealthResponseDto> {
    return await this.financialHealthService.createFinancialHealth(dto);
  }
  @Get(':numberId')
  async getFinancialHealthByClientNumberId(@Param('numberId') numberId: string): Promise<FinancialHealthResponseDto> {
    return await this.financialHealthService.getFinancialHealthByClientNumberId(numberId);
  }
}
