/**
 * Todo API
 *
 * @package src/todo
 * @route GET /api/todos
 */
import * as express from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../todo/todo.controller';

const router = express.Router();

// ルートを定義する
router.get('/todos', getTodos);
router.post('/todo', createTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

export default router;
