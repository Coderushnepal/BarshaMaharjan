import { Router } from 'express';

import { validateAddTodo } from './schemas/todo';
import * as endpoints from './constants/endpoints';
import * as todoController from './controllers/todo';
import { validateUserCreation} from './schemas/user';
import { validateAddTodo, validateUpdateTodo } from './schemas/todoSchema';
import * as userController from './controllers/userController';


const router = Router();

router.get('/', (req, res, next) => {
    res.json ({
    name:'todo-api',
    version:'1.0.0'
        });
    });

    router.post(endpoints.CREATE_USER, validateUserCreation, userController.createUser);

    router.get(endpoints.GET_ALL_TODOS, todoController.getAllTodos);

    router.get(endpoints.GET_TODO_BY_ID, todoController.getTodoById);
    router.post(endpoints.ADD_TODO, validateAddTodo, todoController.addTodo);
    router.delete(endpoints.REMOVE_TODO, todoController.removeTodo);
    router.put(endpoints.UPDATE_TODO, validateUpdateTodo, todoController.updateTodo);

    export default router;