import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRate } from './entities/exchange-rate.entity';
import { CreateExchangeRateDto } from './dto/create-exchange-rate.dto';
import { GetExchangeRateDto } from './dto/get-exchange-rate.dto';

@Injectable()
export class ExchangeRateService {
  constructor(
    @InjectRepository(ExchangeRate)
    private exchangeRateRepository: Repository<ExchangeRate>,
  ) { }

  async createExchangeRate(exchangeRate: CreateExchangeRateDto): Promise<ExchangeRate> {
    const newExchangeRate = this.exchangeRateRepository.create(exchangeRate);
    return await this.exchangeRateRepository.save(newExchangeRate);
  }

  async getExchangeRateByCode(getExchangeRate: GetExchangeRateDto): Promise<ExchangeRate> {
    const upperCaseCode = getExchangeRate.currencyCode.toUpperCase();

    const exchangeRate = await this.exchangeRateRepository.findOneBy({
      currencyCode: upperCaseCode,
    });

    if (!exchangeRate) {
      throw new NotFoundException(`Exchange rate for currency ${upperCaseCode} not found.`);
    }

    return exchangeRate;
  }


}
