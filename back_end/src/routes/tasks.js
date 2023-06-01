import { Router } from "express";
import tasks from "../controllers/tasks";

const router = Router();

router.get('/tasks/:id', tasks.getTasks);
router.get('/tasks/shared_todos/:id', tasks.getSharedTaskByID);
router.get('/users/:id', tasks.getUserById);
router.put('/tasks/:id', tasks.toggleCompleted);
router.delete('/tasks/:id', tasks.deleteTask);
router.post('/tasks/shared_tasks', tasks.shareTask);
router.post('/tasks', tasks.createTask);


export default router;