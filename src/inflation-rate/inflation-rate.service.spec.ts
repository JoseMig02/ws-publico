import { Test, TestingModule } from '@nestjs/testing';
import { InflationRateService } from './inflation-rate.service';

describe('InflationRateService', () => {
  let service: InflationRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InflationRateService],
    }).compile();

    service = module.get<InflationRateService>(InflationRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
