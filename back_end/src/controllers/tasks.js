import { connection }  from "../database";
import tasks from "../models/tasks";

export default {
  getTasks: async (req, res) => {
    const id = req.params.id
    const [rows] = await tasks.getTasksById(connection, id);
    res.json(rows);
  },

  getSharedTaskByID: async (req, res) => {
    const id = req.params.id;
    const [task] = await tasks.getSharedTaskByID(connection, id);
    const [author] = await tasks.getUserByID(connection, task[0].id_user);
    const [shared_with] = await tasks.getUserByID(connection, task[0].id_shared_with);
    res.status(200).send({ author, shared_with });
  },

  getUserById: async(req, res) => {
    const id = req.params.id;
    const [user] = await tasks.getUserByID(connection, id);
    res.status(200).send(user);
  },

  toggleCompleted: async(req, res) => {
    const { value } = req.body;
    const id = req.params.id;
    const [task] = await tasks.toggleCompleted(connection, value, id);
    res.status(200).send(task);
  },

  updateTask: async (req, res) => {
    const {newName, status} = req.body;
    const idTask = req.params.id;
    const [task] = await tasks.updateTask(connection, newName,status, idTask);
    res.status(200).send(task);
  },

  deleteTask: async (req, res) => {
    const id = req.params.id;
    await tasks.deleteTask(connection, id);
    res.send({ message: "Task deleted successfully"});
  },

  shareTask: async(req, res) => {
    const { id_task, id_user, email } = req.body;
    const [userToShare] = await tasks.getUserByEmail(connection, email);
    const [sharedTodo] = await tasks.shareTask(connection, id_task, id_user, userToShare[0].id);
    res.status(201).send(sharedTodo);
  },

  createTask: async(req, res) => {
    const { id_user, title } = req.body;
    const [task] = await tasks.createTask(connection, id_user, title);
    const taskId = task.insertId;
    const [newTask] = await tasks.getTask(connection, taskId)
    res.status(201).send(newTask[0]);
  }
}