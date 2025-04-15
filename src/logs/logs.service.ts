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
  async getLogs(
    from?: string,
    to?: string,
    page: number = 1,
    limit: number = 10,
    search?: string
  ): Promise<any> {
    const queryBuilder = this.serviceLogRepository.createQueryBuilder('log');
  
    if (from && to) {
      queryBuilder.where('log.createdAt BETWEEN :from AND :to', { from, to });
    }
  
    if (search) {
      const whereOrAnd = from && to ? 'andWhere' : 'where';
      queryBuilder[whereOrAnd](
        `(
          CAST(log.id AS VARCHAR) LIKE :search COLLATE Latin1_General_CI_AI OR
          log.serviceName LIKE :search COLLATE Latin1_General_CI_AI OR
          log.ipAddress LIKE :search COLLATE Latin1_General_CI_AI
        )`,
        { search: `%${search}%` }
      );
    }
    
  
    const total = await queryBuilder.getCount();
  
    const logs = await queryBuilder
      .orderBy('log.createdAt', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();
  
    return {
      total,
      logs
    };
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
