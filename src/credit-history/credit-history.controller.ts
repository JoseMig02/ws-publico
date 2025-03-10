import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditHistoryService } from './credit-history.service';
import { CreateCreditHistoryDto } from './dto/create-credit-history.dto';
import { UpdateCreditHistoryDto } from './dto/update-credit-history.dto';

@Controller('credit-history')
export class CreditHistoryController {
  constructor(private readonly creditHistoryService: CreditHistoryService) {}

  @Post()
  create(@Body() createCreditHistoryDto: CreateCreditHistoryDto) {
    return this.creditHistoryService.create(createCreditHistoryDto);
  }

  @Get()
  findAll() {
    return this.creditHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreditHistoryDto: UpdateCreditHistoryDto) {
    return this.creditHistoryService.update(+id, updateCreditHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditHistoryService.remove(+id);
  }
}
