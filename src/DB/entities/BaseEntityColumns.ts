import { BeforeInsert, BeforeUpdate, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

interface BaseEntityColumnsI {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export abstract class BaseEntityColumns implements BaseEntityColumnsI {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @BeforeInsert()
  public setCreateDate(): void {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    this.updatedAt = new Date();
  }

}