import { PartialType } from '@nestjs/swagger';
import { CreateFinancialHealthDto } from './create-financial-health.dto';

export class UpdateFinancialHealthDto extends PartialType(CreateFinancialHealthDto) {}
