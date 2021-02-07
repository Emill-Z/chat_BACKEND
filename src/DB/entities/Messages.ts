import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntityColumns } from './BaseEntityColumns';

@Entity()
export class Messages extends BaseEntityColumns {

  @PrimaryColumn()
  userId: number; // User who addedd a message

  @Column()
  roomId: number;

  @Column('varchar', { length: 1000 })
  content: string;

}