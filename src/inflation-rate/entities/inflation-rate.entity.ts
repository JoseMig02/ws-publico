import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('inflation_rate')
export class InflationRate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 6 })
  period: string;

  @Column('decimal', { precision: 5, scale: 2 })
  rate: number; 
}
