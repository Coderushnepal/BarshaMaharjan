import { Router } from 'express';

import * as endpoints from './constants/endpoints';
import * as todoController from './controllers/todo';
import { validateUserCreation} from './schemas/user';
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
  
    export default router;