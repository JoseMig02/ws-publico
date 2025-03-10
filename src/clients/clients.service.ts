// src/client/client.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async createClient(dto: CreateClientDto): Promise<Client> {
    const existsId = await this.clientRepository.findOne({ where: { numberId: dto.numberId } });
    if (existsId) {
      throw new BadRequestException(`El cliente con cédula ${dto.numberId} ya existe.`);
    }

      const existsEmail = await this.clientRepository.findOne({ where: { email: dto.email } });
      if (existsEmail) {
        throw new BadRequestException(`El cliente con email ${dto.email} ya existe.`);
      }
  
    const newClient = this.clientRepository.create(dto);
    return await this.clientRepository.save(newClient);
  }
  
  async getAllClients(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async getClientById(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado.`);
    }
    return client;
  }

  async updateClient(id: number, dto: UpdateClientDto): Promise<Client> {
    const client = await this.getClientById(id);
    const updated = Object.assign(client, dto);
    return await this.clientRepository.save(updated);
  }

  async deleteClient(id: number): Promise<void> {
    const result = await this.clientRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado.`);
    }
  }
}
