import { Column, Entity } from 'typeorm';
import { BaseEntityColumns } from './BaseEntityColumns';

@Entity()
export class Room extends BaseEntityColumns {

  @Column()
  userId: number; // is a participant

  @Column('varchar', { length: 50 })
  name: string;

}