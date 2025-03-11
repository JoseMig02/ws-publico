import { IsNotEmpty, IsString, IsNumber, Min, IsIn, MaxLength, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsCedulaValidConstraint } from 'src/common/validators/cedula.validator';

export class CreateFinancialHealthDto {

  @ApiProperty({
    example: '00123456789',
    description: 'Cédula o RNC del cliente en formato de cadena de texto.',
  })
 @Validate(IsCedulaValidConstraint)
  @IsNotEmpty({ message: 'La cédula o RNC del cliente es requerida.' })
  @IsString({ message: 'La cédula o RNC debe ser una cadena de texto.' })
  numberId: string;
  @ApiProperty({
    example: 'S',
    description: 'Indicador de salud financiera. Debe ser "S" o "N".',
  })

  @IsNotEmpty({ message: 'El indicador es requerido.' })
  @IsString({ message: 'El indicador debe ser una cadena de texto.' })
  @IsIn(['S', 'N'], { message: 'El indicador debe ser "S" o "N".' })
  indicator: string;

  @ApiProperty({
    example: 'Cliente con historial de pago puntual.',
    description: 'Comentario opcional con un máximo de 255 caracteres.',
    required: false,
  })
  @MaxLength(255, { message: 'El comentario no puede tener más de 255 caracteres.' })
  comment?: string;

  @ApiProperty({
    example: 15000.75,
    description: 'Monto total adeudado en la moneda correspondiente.',
  })
  @IsNotEmpty({ message: 'El monto total adeudado es requerido.' })
  @IsNumber({}, { message: 'El monto total adeudado debe ser un número.' })
  @Min(0, { message: 'El monto total adeudado no puede ser negativo.' })
  totalAmountDue: number;
}
