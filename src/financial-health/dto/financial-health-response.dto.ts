// src/financial-health/dto/financial-health-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

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
