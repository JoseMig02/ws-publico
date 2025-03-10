import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('client')
@Unique(['numberId']) 
@Unique(['email']) 
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  numberId: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;
}
