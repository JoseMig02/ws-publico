import { Module } from '@nestjs/common';
import { InflationRateService } from './inflation-rate.service';
import { InflationRateController } from './inflation-rate.controller';
import { InflationRate } from './entities/inflation-rate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([InflationRate]),

  ],
  controllers: [InflationRateController],
  providers: [InflationRateService],
})
export class InflationRateModule { }
