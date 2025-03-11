// src/financial-health/dto/financial-health-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsCedulaValidConstraint } from 'src/common/validators/cedula.validator';

export class FinancialHealthResponseDto {
  @ApiProperty({
    description: 'ID de la evaluación de salud financiera',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Cédula o RNC del cliente',
    example: '00123456789',
  })
   @Validate(IsCedulaValidConstraint)
    @IsNotEmpty({ message: 'La cédula o RNC del cliente es requerida.' })
    @IsString({ message: 'La cédula o RNC debe ser una cadena de texto.' })
  numberId: string;

  @ApiProperty({
    description: 'Indicador de salud financiera (S/N)',
    example: 'S',
  })
  indicator: string;

  @ApiProperty({
    description: 'Comentario adicional',
    example: 'Buen comportamiento de pago.',
    nullable: true,
  })
  comment: string;


  totalAmountDue: number;
}
