import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export const DEAL_MODEL = 'Deal';

@Entity('deals')
export class Deal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column('int')
  totalPrice: number;

  @Column('float')
  yieldPercent: number;

  @Column('int')
  soldPercent: number;

  @Column('int')
  ticketPrice: number;

  @Column('int')
  daysLeft: number;

  @CreateDateColumn()
  createdAt: Date;
}
