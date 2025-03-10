import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 100 })
  serviceName: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  ipAddress: string;  

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;
}
