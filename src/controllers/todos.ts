import { Request, Response, NextFunction, RequestHandler } from 'express'
import { Todo } from '../models/todoModel';



export const createTodo = (  
  req: Request,
  res: Response,
  next: NextFunction
) => {

}


// consider following array as some data from database
const TODOS: Todo[] = [];



export const createTodoWithRequestHandler: RequestHandler = (  
  req,
  res,
  next
) => {
  const text = (req.body as { text: string  }).text;
  const newTodo = new Todo (Math.random().toString(), text);

  TODOS.push(newTodo );

  res.status(201).json({message: 'Created the todo', newTodo});
}


export const getTodos: RequestHandler = (req, res, next) => {
  res.json({todos: TODOS});
}


// <{id: string}> part is not mandatory but tells Typescript that we are expecting a parameter "id" and is it "string type"
export const updateTodo: RequestHandler<{id: string}> = ( req, res, next ) => {
  const todoId = req.params.id;
  const updateText = (req.body as {text: string}).text;  // type casting

  const todoIndex = TODOS.findIndex( item => item.id === todoId );
  if ( todoIndex < 0 ) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIndex] = new Todo( TODOS[todoIndex].id, updateText );

  res.json({   message: 'Updated', updatedTodo: TODOS[todoIndex]  });
}


export const deleteTodo: RequestHandler<{id: string}> = ( req, res, next ) => { 
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex( item => item.id === todoId );
  if ( todoIndex < 0 ) {
    throw new Error('Could not find todo!');
  }

  TODOS.splice(todoIndex, 1);
  res.json({message: 'Todo Deleted'})
}



