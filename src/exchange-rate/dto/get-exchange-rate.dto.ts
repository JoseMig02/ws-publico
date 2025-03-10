import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetExchangeRateDto {
  @ApiProperty({
    description: 'Código de la moneda en formato ISO (por ejemplo, DOP, USD, EUR)',
    example: 'USD',
  })
  @IsNotEmpty({ message: 'El código de la moneda es requerido.' })
  @IsString({ message: 'El código de la moneda debe ser una cadena de texto.' })
  @MaxLength(3, { message: 'El código de la moneda no puede tener más de 3 caracteres.' })
  currencyCode: string;
}
