// src/client/client.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { ClientService } from './clients.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(@Body() dto: CreateClientDto): Promise<Client> {
    return await this.clientService.createClient(dto);
  }

  @Get()
  async getAllClients(): Promise<Client[]> {
    return await this.clientService.getAllClients();
  }

  @Get(':id')
  async getClientById(@Param('id', ParseIntPipe) id: number): Promise<Client> {
    return await this.clientService.getClientById(id);
  }

  @Put(':id')
  async updateClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateClientDto,
  ): Promise<Client> {
    return await this.clientService.updateClient(id, dto);
  }

  @Delete(':id')
  async deleteClient(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.clientService.deleteClient(id);
    return { message: 'Cliente eliminado exitosamente.' };
  }
}
