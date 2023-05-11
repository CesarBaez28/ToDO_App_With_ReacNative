import { Router } from "express";
import { getTasks } from "../controllers/tasks";

const router = Router();

router.get('/tasks', getTasks);

export default router;