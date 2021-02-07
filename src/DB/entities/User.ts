import { Entity, Column, PrimaryColumn } from 'typeorm';
import { BaseEntityColumns } from './BaseEntityColumns';

@Entity()
export class User extends BaseEntityColumns {

  @Column('varchar', { length: 50 })
  name: string;

  @PrimaryColumn('varchar', { length: 50 })
  email: string;

  @Column()
  password: string;

}