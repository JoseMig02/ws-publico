import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialHealthService } from './financial-health.service';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { UpdateFinancialHealthDto } from './dto/update-financial-health.dto';

@Controller('financial-health')
export class FinancialHealthController {
  constructor(private readonly financialHealthService: FinancialHealthService) {}

  @Post()
  create(@Body() createFinancialHealthDto: CreateFinancialHealthDto) {
    return this.financialHealthService.create(createFinancialHealthDto);
  }

  @Get()
  findAll() {
    return this.financialHealthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialHealthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialHealthDto: UpdateFinancialHealthDto) {
    return this.financialHealthService.update(+id, updateFinancialHealthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialHealthService.remove(+id);
  }
}
