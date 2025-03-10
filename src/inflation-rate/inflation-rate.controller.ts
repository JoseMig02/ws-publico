// src/inflation-rate/inflation-rate.controller.ts
import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { InflationRateService } from './inflation-rate.service';
import { InflationRateResponseDto } from './dto/inflation-rate-response.dto';

@Controller('inflation-rate')
export class InflationRateController {
  constructor(private readonly inflationRateService: InflationRateService) {}

  @Get()
  async getInflationRateByPeriod(
    @Query('period') period: string,
  ): Promise<InflationRateResponseDto> {
    if (!period) {
      throw new BadRequestException('The period is required.');
    }

    // Obtener el índice de inflación para el período proporcionado
    return await this.inflationRateService.getInflationRateByPeriod(period);
  }
}
