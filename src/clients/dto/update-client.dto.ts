// src/client/dto/update-client.dto.ts
import { IsOptional, IsString, IsEmail, MaxLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateClientDto {
  @ApiPropertyOptional({
    description: 'Nombre completo del cliente',
    example: 'Juan Pérez',
  })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres.' })
  name?: string;

  @ApiPropertyOptional({
    description: 'Correo electrónico del cliente',
    example: 'juan.perez@example.com',
  })
  @IsOptional()
  @IsEmail({}, { message: 'Debe ser un correo electrónico válido.' })
  email?: string;
}
