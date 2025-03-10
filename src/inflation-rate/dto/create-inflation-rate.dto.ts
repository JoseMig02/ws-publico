// src/inflation-rate/dto/create-inflation-rate.dto.ts
import { IsNotEmpty, IsString, IsNumber, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInflationRateDto {
  @IsNotEmpty({ message: 'El período es requerido.' })
  @IsString({ message: 'El período debe ser una cadena de texto.' })
  @MaxLength(6, { message: 'El período debe tener 6 caracteres.' })
  period: string;

  @ApiProperty({
    description: 'El índice de inflación en porcentaje.',
    example: 5.75,
  })
  @IsNotEmpty({ message: 'El índice de inflación es requerido.' })
  @IsNumber({}, { message: 'El índice de inflación debe ser un número.' })
  @Min(0, { message: 'El índice de inflación no puede ser negativo.' })
  rate: number;
}
