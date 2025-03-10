import { IsNotEmpty, IsString, IsNumber, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateExchangeRateDto {
  @ApiProperty({
    description: 'Código de la moneda en formato ISO (por ejemplo, DOP, USD, EUR)',
    example: 'USD',
  })
  @IsNotEmpty({ message: 'El código de la moneda es requerido.' })
  @IsString({ message: 'El código de la moneda debe ser una cadena de texto.' })
  @MaxLength(3, { message: 'El código de la moneda no puede tener más de 3 caracteres.' })
  @Transform(({ value }) => value?.toUpperCase(), { toClassOnly: true }) 
  currencyCode: string;

  @ApiProperty({
    description: 'Tasa de cambio correspondiente a la moneda.',
    example: 56.75,
  })
  @IsNotEmpty({ message: 'La tasa de cambio es requerida.' })
  @IsNumber({}, { message: 'La tasa de cambio debe ser un número.' })
  @Min(0, { message: 'La tasa de cambio no puede ser negativa.' })
  rate: number;
}
