import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTableCreate1612809825027 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isPrimary: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          isNullable: true,
        },
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }

}
