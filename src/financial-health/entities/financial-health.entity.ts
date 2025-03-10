import { Client } from 'src/clients/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('financial_health')
export class FinancialHealth {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Client)
  @JoinColumn() 
  client: Client;

  @Column({ type: 'char', length: 1 })
  indicator: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  comment: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmountDue: number;
}
