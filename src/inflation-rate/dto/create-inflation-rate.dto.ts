import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, IsNumber, Min } from 'class-validator';

export class CreateInflationRateDto {

    
  @ApiProperty({
    example: '2024/06',
    description: 'Período en formato YYYY/MM.',
  })
  @IsNotEmpty({ message: 'El período es requerido.' })
  @Matches(/^\d{4}\/\d{2}$/, { message: 'El período debe estar en formato YYYY/MM.' })
  period: string;

  @ApiProperty({
    example: 3.5,
    description: 'Índice de inflación como un número positivo.',
  })

  @IsNotEmpty({ message: 'El índice de inflación es requerido.' })
  @IsNumber({}, { message: 'El índice de inflación debe ser un número válido.' })
  @Min(0, { message: 'El índice de inflación no puede ser negativo.' })
  rate: number;
}
