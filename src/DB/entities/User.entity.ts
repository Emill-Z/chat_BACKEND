import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import { BaseEntityColumns } from './BaseEntityColumns';
import { hash } from 'bcrypt';

@Entity()
export class User extends BaseEntityColumns {

  @Column('varchar', { length: 50 })
  name: string;

  @PrimaryColumn('varchar', { length: 100, unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }

}