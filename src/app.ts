// const express = require('express');
import 
  express 
  , { Request, Response, NextFunction }
from 'express';
import { json } from 'body-parser';

// Import Routes
import todoRoutes from './routes/todosRoute';


const app = express();


// Register Body Parser as a Middleware
app.use(json());


// Define routes
app.use('/todos', todoRoutes);



app.get("/", 
  (req, res) => {
    res.send('API Running');
  }
);



// Error Handling
app.use(
  ( err: Error, req: Request, res: Response, next: NextFunction ) => {
    res.status(500).json({ message: err.message });
  }
)


app.listen(
  3000
);