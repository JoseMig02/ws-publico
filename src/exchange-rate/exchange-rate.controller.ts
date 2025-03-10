import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRate } from './entities/exchange-rate.entity';
import { CreateExchangeRateDto } from './dto/create-exchange-rate.dto';
import { GetExchangeRateDto } from './dto/get-exchange-rate.dto';

@Controller('exchange-rate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @Post()
  async createExchangeRate(@Body() createExchangeRateDto: CreateExchangeRateDto): Promise<ExchangeRate> {
    return await this.exchangeRateService.createExchangeRate(
      createExchangeRateDto)
  }

  @Get()
  async getExchangeRateByCode(@Query() query: GetExchangeRateDto): Promise<ExchangeRate> {
    return await this.exchangeRateService.getExchangeRateByCode(
      query
    );
  }

}
