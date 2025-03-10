import { IsNotEmpty, Matches, IsNumber, Min } from 'class-validator';

export class CreateInflationRateDto {

  @IsNotEmpty({ message: 'El período es requerido.' })
  @Matches(/^\d{4}\/\d{2}$/, { message: 'El período debe estar en formato YYYY/MM.' })
  period: string;

  @IsNotEmpty({ message: 'El índice de inflación es requerido.' })
  @IsNumber({}, { message: 'El índice de inflación debe ser un número válido.' })
  @Min(0, { message: 'El índice de inflación no puede ser negativo.' })
  rate: number;
}
