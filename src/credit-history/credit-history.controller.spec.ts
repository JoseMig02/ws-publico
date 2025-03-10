import { Test, TestingModule } from '@nestjs/testing';
import { CreditHistoryController } from './credit-history.controller';
import { CreditHistoryService } from './credit-history.service';

describe('CreditHistoryController', () => {
  let controller: CreditHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditHistoryController],
      providers: [CreditHistoryService],
    }).compile();

    controller = module.get<CreditHistoryController>(CreditHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
