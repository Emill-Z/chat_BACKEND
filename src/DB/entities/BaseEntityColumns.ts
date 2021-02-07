import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

interface BaseEntityColumnsI {
  id: number;
  createdDate: string;
  updateedDate: string;
}

export class BaseEntityColumns implements BaseEntityColumnsI {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updateedDate: string;

}