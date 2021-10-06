import { Router }  from 'express'
import { createTodo, getTodos, createTodoWithRequestHandler, updateTodo, deleteTodo } from '../controllers/todos';



const router = Router();



router.get(
  '/itisanexamplepreviousone',
  async ( req, res ) => {

  }
)

router.post(
  '/',
  createTodoWithRequestHandler
)

router.get(
  '/',
  getTodos
)
router.patch(
  '/:id',
  updateTodo
)
router.delete(
  '/:id',
  deleteTodo
)


export default router;