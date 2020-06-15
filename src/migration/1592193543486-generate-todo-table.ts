import { MigrationInterface, QueryRunner } from 'typeorm'

export class generateTodoTable1592193543486 implements MigrationInterface {
  name = 'generateTodoTable1592193543486'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `tasks` (`id` int NOT NULL AUTO_INCREMENT, `text` text NOT NULL, `is_finished` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `tasks`')
  }
}
