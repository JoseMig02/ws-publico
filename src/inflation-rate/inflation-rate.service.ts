// src/inflation-rate/inflation-rate.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InflationRate } from './entities/inflation-rate.entity';
import { InflationRateResponseDto } from './dto/inflation-rate-response.dto';

@Injectable()
export class InflationRateService {
  constructor(
    @InjectRepository(InflationRate)
    private inflationRateRepository: Repository<InflationRate>,
  ) {}

  async getInflationRateByPeriod(period: string): Promise<InflationRateResponseDto> {
    const inflationRate = await this.inflationRateRepository.findOne({
      where: { period },
    });

    if (!inflationRate) {
      throw new NotFoundException(`Inflation rate for period ${period} not found.`);
    }
    return {
      period: inflationRate.period,
      rate: inflationRate.rate,
    };
  }
}
