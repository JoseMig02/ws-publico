import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './entities/log.entity';

@Injectable()
export class ServiceLog{
  constructor(
    @InjectRepository(Log)
    private readonly serviceLogRepository: Repository<Log>
  ) {}

  async createLog(serviceName: string, ip: any): Promise<void> {
    const log = this.serviceLogRepository.create({
      serviceName,
      ipAddress: ip
    });
    await this.serviceLogRepository.save(log);
  }
  async getLogs(from?: string, to?: string): Promise<Log[]> {
    const queryBuilder = this.serviceLogRepository.createQueryBuilder('log');
    
    if (from && to) {
      queryBuilder.where('log.createdAt BETWEEN :from AND :to', { from, to });
    }

    queryBuilder.orderBy('log.createdAt', 'DESC');
    
    return await queryBuilder.getMany();
  }
  
  async getStatistics(): Promise<any> {
    const stats = await this.serviceLogRepository
      .createQueryBuilder('log')
      .select('log.serviceName', 'serviceName')
      .addSelect('COUNT(*)', 'count')
      .groupBy('log.serviceName')
      .getRawMany();
  
    return stats;
  }
}
