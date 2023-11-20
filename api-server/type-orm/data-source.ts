import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { TodoEntity } from './entity/todo.entity';
import { CreateTodoTable1700394238770 as CreateTodoTable } from './migration/1700394238770-Todo';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
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
