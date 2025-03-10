// src/client/dto/create-client.dto.ts
import { IsNotEmpty, IsString, IsOptional, IsEmail, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({
    description: 'Cédula del cliente (única)',
    example: '00123456789',
  })
  @IsNotEmpty({ message: 'La cédula es requerida.' })
  @IsString({ message: 'La cédula debe ser una cadena de texto.' })
  @MaxLength(20, { message: 'La cédula no puede tener más de 20 caracteres.' })
  numberId: string;

  @ApiProperty({
    description: 'Nombre completo del cliente',
    example: 'Juan Pérez',
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres.' })
  name: string;

  @ApiProperty({
    description: 'Correo electrónico del cliente',
    example: 'juan.perez@example.com',
    required: false,
  })
  @IsNotEmpty({ message: 'El email es requerido.' })
  @IsEmail({}, { message: 'Debe ser un correo electrónico válido.' })
  email?: string;
}
