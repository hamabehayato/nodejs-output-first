import 'reflect-metadata';
import * as express from 'express';
import { AppDataSource } from './data-source';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from './todo/todo.controller';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization failed:', error);
  });

/**
 * Todo API
 *
 * @package src/todo
 * @route GET /api/todos
 */
app.get('/api/todos', getTodos);
app.post('/api/todo', createTodo);
app.put('/api/todo/:id', updateTodo);
app.delete('/api/todo/:id', deleteTodo);
