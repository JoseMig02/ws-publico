import { PartialType } from '@nestjs/swagger';
import { CreateCreditHistoryDto } from './create-credit-history.dto';

export class UpdateCreditHistoryDto extends PartialType(CreateCreditHistoryDto) {}
