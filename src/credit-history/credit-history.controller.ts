// src/credit-history/credit-history.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';
import { CreditHistoryService } from './credit-history.service';
import { CreateCreditHistoryDto } from './dto/create-credit-history.dto';
import { CreditHistoryResponseDto } from './dto/credit-history-response.dto';

@ApiTags('Credit History')
@Controller('credit-history')
export class CreditHistoryController {
  constructor(private readonly creditHistoryService: CreditHistoryService) {}

  @Post()
  async createCreditHistory(@Body() dto: CreateCreditHistoryDto): Promise<CreditHistoryResponseDto> {
    return await this.creditHistoryService.createCreditHistory(dto);
  }

  @Get(':numberId')
  async getCreditHistoryByClientCedula(@Param('numberId') numberId: string): Promise<CreditHistoryResponseDto[]> {
    return await this.creditHistoryService.getCreditHistoryByClientNumberId(numberId);
  }
}
