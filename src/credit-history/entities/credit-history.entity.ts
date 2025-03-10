// src/credit-history/entities/credit-history.entity.ts
import { Client } from 'src/clients/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('credit_history')
export class CreditHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, { nullable: false })
  @JoinColumn() 
  client: Client;

  @Column({ type: 'varchar', length: 20 })
  companyRnc: string;

  // Concepto de la deuda
  @Column({ type: 'varchar', length: 255 })
  debtConcept: string;

  @Column({ type: 'date' })
  date: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmountDue: number;
}
