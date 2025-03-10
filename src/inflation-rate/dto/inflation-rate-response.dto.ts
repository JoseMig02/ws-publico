// src/inflation-rate/dto/inflation-rate-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class InflationRateResponseDto {

  period: string;

  rate: number;
}
