// src/inflation-rate/inflation-rate.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InflationRate } from './entities/inflation-rate.entity';
import { InflationRateResponseDto } from './dto/inflation-rate-response.dto';
import { CreateInflationRateDto } from './dto/create-inflation-rate.dto';

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
    return  inflationRate;
    
  }
  async createInflationRate(dto: CreateInflationRateDto): Promise<InflationRate> {
    const { period, rate } = dto;

    const existingRate = await this.inflationRateRepository.findOne({ where: { period } });
    if (existingRate) {
      throw new BadRequestException(`An inflation rate for period ${period} already exists.`);
    }

    const newInflationRate = this.inflationRateRepository.create({ period, rate });

    return await this.inflationRateRepository.save(newInflationRate);
  }
}
