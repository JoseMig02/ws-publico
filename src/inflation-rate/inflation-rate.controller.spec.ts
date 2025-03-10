import { Test, TestingModule } from '@nestjs/testing';
import { InflationRateController } from './inflation-rate.controller';
import { InflationRateService } from './inflation-rate.service';

describe('InflationRateController', () => {
  let controller: InflationRateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InflationRateController],
      providers: [InflationRateService],
    }).compile();

    controller = module.get<InflationRateController>(InflationRateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
