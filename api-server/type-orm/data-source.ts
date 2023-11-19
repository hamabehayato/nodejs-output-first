// マイグレーション実行コマンド
// npx typeorm-ts-node-commonjs migration:run -d type-orm/data-source.ts

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { TodoEntity } from './entity/todo.entity';
import { CreateTodoTable } from './migration/1700394238770-Todo';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'nestjs-output-first-db',
  port: 3306,
  username: 'user',
  password: 'pass',
  database: 'NEXTJS_OUTPUT_WITH_CRUD_DB', // Docker Composeで指定したMySQLのデータベース名
  synchronize: true,
  logging: false,
  entities: [TodoEntity],
  migrations: [CreateTodoTable],
  subscribers: [],
});
