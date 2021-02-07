import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntityColumns } from './BaseEntityColumns';

@Entity()
export class Room extends BaseEntityColumns {

  @PrimaryColumn()
  userId: number;

  @Column('varchar', { length: 50 })
  name: string;

}