import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsCedulaValidConstraint } from 'src/common/validators/cedula.validator';

export class CreditHistoryResponseDto {

  id: number;

  @Validate(IsCedulaValidConstraint)
  @IsNotEmpty({ message: 'La cédula o RNC del cliente es requerida.' })
  @IsString({ message: 'La cédula o RNC debe ser una cadena de texto.' })
  numberId: string;


  companyRnc: string;

  debtConcept: string;

  date: string;

  totalAmountDue: number;
  name: string;
}
