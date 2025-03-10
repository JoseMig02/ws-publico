import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Nombre de la tabla
export class ExchangeRate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 3, unique: true }) 
  currencyCode: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate: number;

}
