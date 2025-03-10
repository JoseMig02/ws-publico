// src/inflation-rate/inflation-rate.controller.ts
import { Controller, Get, Query, BadRequestException, Post, Body } from '@nestjs/common';
import { InflationRateService } from './inflation-rate.service';
import { InflationRateResponseDto } from './dto/inflation-rate-response.dto';
import { CreateInflationRateDto } from './dto/create-inflation-rate.dto';
import { InflationRate } from './entities/inflation-rate.entity';

@Controller('inflation-rate')
export class InflationRateController {
  constructor(private readonly inflationRateService: InflationRateService) {}
  @Post()
  async createInflationRate(@Body() dto: CreateInflationRateDto): Promise<InflationRate> {
    return await this.inflationRateService.createInflationRate(dto);
  }
  @Get()
  async getInflationRateByPeriod(
    @Query('period') period: string,
  ): Promise<InflationRateResponseDto> {
    if (!period) {
      throw new BadRequestException('The period is required.');
    }
    return await this.inflationRateService.getInflationRateByPeriod(period);
  }

}
