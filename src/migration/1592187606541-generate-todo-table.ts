import {MigrationInterface, QueryRunner} from "typeorm";

export class generateTodoTable1592187606541 implements MigrationInterface {
    name = 'generateTodoTable1592187606541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT, `text` text NOT NULL, `isFinished` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `task`");
    }

}
