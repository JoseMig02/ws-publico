import { IsNotEmpty, IsString, IsDateString, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateCreditHistoryDto {

  @IsNotEmpty({ message: 'La cédula o RNC del cliente es requerida.' })
  @IsString({ message: 'La cédula o RNC debe ser una cadena de texto.' })
  numberId: string;


  @IsNotEmpty({ message: 'El RNC de la empresa es requerido.' })
  @IsString({ message: 'El RNC de la empresa debe ser una cadena de texto.' })
  @MaxLength(20, { message: 'El RNC de la empresa no puede exceder 20 caracteres.' })
  companyRnc: string;

  @IsNotEmpty({ message: 'El concepto de la deuda es requerido.' })
  @IsString({ message: 'El concepto de la deuda debe ser una cadena de texto.' })
  @MaxLength(255, { message: 'El concepto de la deuda no puede exceder 255 caracteres.' })
  debtConcept: string;

  @IsNotEmpty({ message: 'La fecha es requerida.' })
  @IsDateString({}, { message: 'La fecha debe estar en formato ISO (YYYY-MM-DD).' })
  date: string;

  @IsNotEmpty({ message: 'El monto total adeudado es requerido.' })
  @IsNumber({}, { message: 'El monto total adeudado debe ser un número.' })
  @Min(0, { message: 'El monto total adeudado no puede ser negativo.' })
  totalAmountDue: number;
}
