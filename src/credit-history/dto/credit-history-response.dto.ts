import { ApiProperty } from '@nestjs/swagger';

export class CreditHistoryResponseDto {

  id: number;

  numberId: string;

  companyRnc: string;

  debtConcept: string;

  date: string;

  totalAmountDue: number;
  name: string;
}
