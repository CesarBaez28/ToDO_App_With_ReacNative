import { Router } from "express";
import tasks from "../controllers/tasks";

const router = Router();

router.get('/tasks/:id', tasks.getTasks);
router.get('/tasks/shared_tasks/:id', tasks.getSharedTaskByID);
router.get('/users/:id', tasks.getUserById);
router.put('/tasks/users/:id', tasks.updateUser);
router.post('/tasks/login', tasks.login);
router.put('/tasks/:id', tasks.toggleCompleted);
router.put('/tasks/edit/:id', tasks.updateTask);
router.delete('/tasks/:id', tasks.deleteTask);
router.post('/tasks/shared_tasks', tasks.shareTask);
router.post('/tasks', tasks.createTask);


export default router;