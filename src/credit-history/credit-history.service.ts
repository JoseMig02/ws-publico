import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditHistory } from './entities/credit-history.entity';
import { CreateCreditHistoryDto } from './dto/create-credit-history.dto';
import { CreditHistoryResponseDto } from './dto/credit-history-response.dto';
import { Client } from 'src/clients/entities/client.entity';
import { IsCedulaValidConstraint } from 'src/common/validators/cedula.validator';

@Injectable()
export class CreditHistoryService {
  constructor(
    @InjectRepository(CreditHistory)
    private creditHistoryRepository: Repository<CreditHistory>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async createCreditHistory(dto: CreateCreditHistoryDto): Promise<CreditHistoryResponseDto> {
    const client = await this.clientRepository.findOne({ where: { numberId: dto.numberId } });
    if (!client) {
      throw new NotFoundException(`Cliente con cédula/RNC ${dto.numberId} no encontrado.`);
    }
    const debtDate = new Date(dto.date);

    const newRecord = this.creditHistoryRepository.create({
      client,
      companyRnc: dto.companyRnc,
      debtConcept: dto.debtConcept,
      date: debtDate,
      totalAmountDue: dto.totalAmountDue,
    });

    const saved = await this.creditHistoryRepository.save(newRecord);

    return {
      id: saved.id,
      name: client.name,
      numberId: client.numberId,
      companyRnc: saved.companyRnc,
      debtConcept: saved.debtConcept,
      date: saved.date.toISOString().split('T')[0],
      totalAmountDue: saved.totalAmountDue,
    };
  }

  async getCreditHistoryByClientNumberId(numberId: string): Promise<CreditHistoryResponseDto[]> {
    const cedulaValidator = new IsCedulaValidConstraint();
    if (!cedulaValidator.validate(numberId)) {
      throw new BadRequestException('La cédula o RNC no tiene un formato válido.');
    }
    const client = await this.clientRepository.findOne({ where: { numberId } });
    if (!client) {
      throw new NotFoundException(`Cliente con cédula/RNC ${numberId} no encontrado.`);
    }
    const records = await this.creditHistoryRepository.find({ where: { client } });

    if (!records.length) {
      throw new NotFoundException(`No se encontró historial crediticio para el cliente con cédula/RNC ${numberId}.`);
    }

    return records.map(record => ({
      id: record.id,
      numberId: client.numberId,
      name: client.name,
      companyRnc: record.companyRnc,
      debtConcept: record.debtConcept,
      date: typeof record.date === 'string' ? record.date : record.date.toISOString().split('T')[0],
      totalAmountDue: record.totalAmountDue,
    }));
    
  }
}
