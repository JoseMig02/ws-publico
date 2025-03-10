import { Injectable } from '@nestjs/common';
import { CreateCreditHistoryDto } from './dto/create-credit-history.dto';
import { UpdateCreditHistoryDto } from './dto/update-credit-history.dto';

@Injectable()
export class CreditHistoryService {
  create(createCreditHistoryDto: CreateCreditHistoryDto) {
    return 'This action adds a new creditHistory';
  }

  findAll() {
    return `This action returns all creditHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creditHistory`;
  }

  update(id: number, updateCreditHistoryDto: UpdateCreditHistoryDto) {
    return `This action updates a #${id} creditHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} creditHistory`;
  }
}
