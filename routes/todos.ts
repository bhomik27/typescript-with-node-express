import { Router } from 'express';

import { Todo } from '../models/todo';

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, nect) => {
    res.status(200).json({ todos: todos})
});

router.post('/todo', (req, res, nect) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };

    todos.push(newTodo);

    res
    .status(201).json({message: 'Todo added', todo: newTodo, todos: todos});
});


router.put('/todo/:todoId', (req, res, nect) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if(todoIndex < 0) {
        res.status(404).json({message: 'Could not find todo for this id.'});
    }
    todos[todoIndex] = {id: todos[todoIndex].id, text: req.body.text};
    return res.status(200).json({todos: todos});
})


router.delete('/todo/:todoId', (req, res, nect) => {
    const tid = req.params.todoId;

})
export default router;

