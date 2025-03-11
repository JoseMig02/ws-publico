// src/financial-health/financial-health.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinancialHealth } from './entities/financial-health.entity';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { FinancialHealthResponseDto } from './dto/financial-health-response.dto';
import { Client } from 'src/clients/entities/client.entity';
import { IsCedulaValidConstraint } from 'src/common/validators/cedula.validator';

@Injectable()
export class FinancialHealthService {
  constructor(
    @InjectRepository(FinancialHealth)
    private financialHealthRepository: Repository<FinancialHealth>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) { }

  async createFinancialHealth(dto: CreateFinancialHealthDto): Promise<FinancialHealthResponseDto> {
    const client = await this.clientRepository.findOne({ where: { numberId: dto.numberId } });
    if (!client) {
      throw new NotFoundException(`Cliente con cédula/RNC ${dto.numberId} no encontrado.`);
    }
    const existing = await this.financialHealthRepository.findOne({ where: { client } });
    if (existing) {
      throw new BadRequestException(`Ya existe una evaluación de salud financiera para el cliente con cédula/RNC ${dto.numberId}.`);
    }

    const newRecord = this.financialHealthRepository.create({
      client,
      indicator: dto.indicator,
      comment: dto.comment,
      totalAmountDue: dto.totalAmountDue,
    });

    const saved = await this.financialHealthRepository.save(newRecord);

    return {
      id: saved.id,
      numberId: client.numberId,
      indicator: saved.indicator,
      comment: saved.comment,
      totalAmountDue: saved.totalAmountDue,
    };
  }

  async getFinancialHealthByClientNumberId(numberId: string): Promise<FinancialHealthResponseDto> {
    const cedulaValidator = new IsCedulaValidConstraint();
    if (!cedulaValidator.validate(numberId)) {
      throw new BadRequestException('La cédula o RNC no tiene un formato válido.');
    }
    const client = await this.clientRepository.findOne({
      where: {
        numberId
          : numberId
      }
    });
    if (!client) {
      throw new NotFoundException(`Cliente con cédula/RNC ${numberId} no encontrado.`);
    }
    const financialHealth = await this.financialHealthRepository.findOne({ where: { client } });
    if (!financialHealth) {
      throw new NotFoundException(`No se encontró salud financiera para el cliente con cédula/RNC ${numberId}.`);
    }

    return {
      id: financialHealth.id,
      numberId: client.numberId,
      indicator: financialHealth.indicator,
      comment: financialHealth.comment,
      totalAmountDue: financialHealth.totalAmountDue,
    };
  }
}
