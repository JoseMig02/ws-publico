import { IsNotEmpty, IsString, IsNumber, Min, IsIn, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFinancialHealthDto {
  @IsNotEmpty({ message: 'La cédula o RNC del cliente es requerida.' })
  @IsString({ message: 'La cédula o RNC debe ser una cadena de texto.' })
  numberId: string;

  @IsNotEmpty({ message: 'El indicador es requerido.' })
  @IsString({ message: 'El indicador debe ser una cadena de texto.' })
  @IsIn(['S', 'N'], { message: 'El indicador debe ser "S" o "N".' })
  indicator: string;

  @MaxLength(255, { message: 'El comentario no puede tener más de 255 caracteres.' })
  comment?: string;

  @IsNotEmpty({ message: 'El monto total adeudado es requerido.' })
  @IsNumber({}, { message: 'El monto total adeudado debe ser un número.' })
  @Min(0, { message: 'El monto total adeudado no puede ser negativo.' })
  totalAmountDue: number;
}
