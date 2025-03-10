import { Injectable } from '@nestjs/common';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { UpdateFinancialHealthDto } from './dto/update-financial-health.dto';

@Injectable()
export class FinancialHealthService {
  create(createFinancialHealthDto: CreateFinancialHealthDto) {
    return 'This action adds a new financialHealth';
  }

  findAll() {
    return `This action returns all financialHealth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialHealth`;
  }

  update(id: number, updateFinancialHealthDto: UpdateFinancialHealthDto) {
    return `This action updates a #${id} financialHealth`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialHealth`;
  }
}
