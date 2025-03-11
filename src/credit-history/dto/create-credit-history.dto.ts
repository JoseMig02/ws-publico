import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString, IsNumber, Min, MaxLength, Validate } from 'class-validator';
import { IsCedulaValidConstraint } from 'src/common/validators/cedula.validator';

export class CreateCreditHistoryDto {
  @ApiProperty({
    example: '00123456789',
    description: 'Cédula o RNC del cliente en formato de cadena de texto.',
  })

  @Validate(IsCedulaValidConstraint)
  @IsNotEmpty({ message: 'La cédula o RNC del cliente es requerida.' })
  @IsString({ message: 'La cédula o RNC debe ser una cadena de texto.' })
  numberId: string;
  @ApiProperty({
    example: '131456789',
    description: 'RNC de la empresa en formato de cadena de texto (máx. 20 caracteres).',
  })

  @IsNotEmpty({ message: 'El RNC de la empresa es requerido.' })
  @IsString({ message: 'El RNC de la empresa debe ser una cadena de texto.' })
  @MaxLength(20, { message: 'El RNC de la empresa no puede exceder 20 caracteres.' })
  companyRnc: string;

  @ApiProperty({
    example: 'Préstamo bancario para compra de maquinaria.',
    description: 'Concepto de la deuda en formato de cadena de texto (máx. 255 caracteres).',
  })
  @IsNotEmpty({ message: 'El concepto de la deuda es requerido.' })
  @IsString({ message: 'El concepto de la deuda debe ser una cadena de texto.' })
  @MaxLength(255, { message: 'El concepto de la deuda no puede exceder 255 caracteres.' })
  debtConcept: string;

  @ApiProperty({
    example: '2024-03-10',
    description: 'Fecha de la deuda en formato ISO (YYYY-MM-DD).',
  })
  @IsNotEmpty({ message: 'La fecha es requerida.' })
  @IsDateString({}, { message: 'La fecha debe estar en formato ISO (YYYY-MM-DD).' })
  date: string;
  @ApiProperty({
    example: 25000.50,
    description: 'Monto total adeudado en la moneda correspondiente.',
  })
  @IsNotEmpty({ message: 'El monto total adeudado es requerido.' })
  @IsNumber({}, { message: 'El monto total adeudado debe ser un número.' })
  @Min(0, { message: 'El monto total adeudado no puede ser negativo.' })
  totalAmountDue: number;
}
