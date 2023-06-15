export default {

  login: function (conexion, email) {
    return conexion.query(
      `SELECT id, name, email, password FROM users WHERE email = ?`, [email]
    )
  },

  createUser: function (conexion, name, email, password) {
    return conexion.query(
      `INSERT INTO users (name, email, password) VALUES (?,?,?)`, [name, email, password]
    )
  },

  updateUser: function (conexion, name, id) {
    return conexion.query (
      `UPDATE users SET name = '${name}' WHERE id = ?`, [id]
    )
  },

  getTasksById: function (conexion, id) {
    return conexion.query(
      `SELECT tasks.*, shared_tasks.id_shared_with FROM 
      tasks LEFT JOIN shared_tasks ON tasks.id = shared_tasks.id_task WHERE 
      tasks.id_user = ? OR shared_tasks.id_shared_with = ?`, [id, id]
    )
  },

  getTask: function (conexion, id) {
    return conexion.query(`SELECT * FROM tasks WHERE id = ?`, [id])
  },

  getSharedTaskByID: function (conexion, id) {
    return conexion.query(`SELECT * FROM shared_tasks WHERE id_task = ?`, [id])
  },

  getUserByID: function (conexion, id) {
    return conexion.query(`Select * from users WHERE id = ?`, [id])
  },

  getUserByEmail: function (conexion, email) {
    return conexion.query(`SELECT * FROM users WHERE email = ?`, [email])
  },

  createTask: function (conexion, user_id, title) {
    return conexion.query(`INSERT INTO tasks (id_user, name) VALUES (?, ?)`, [user_id, title])
  },

  deleteTask: function (conexion, id) {
    return conexion.query(`DELETE FROM tasks WHERE id = ?`, [id])
  },

  updateTask: function (conexion, newName, status, id) {
    return conexion.query(`UPDATE tasks SET name = '${newName}', completed = ${status} WHERE id = ?`, [id]);
  },

  toggleCompleted: function (conexion, status, id) {
    const statusValue = status === true ? "TRUE" : "FALSE";
    return conexion.query(`UPDATE tasks SET completed = ${statusValue} WHERE id = ?`, [id])
  },

  shareTask: function (conexion, id_task, user_id, shared_with_id) {
    return conexion.query(
      `
      INSERT INTO shared_tasks (id_task, id_user, id_shared_with) 
      VALUES (?, ?, ?);
      `, [id_task, user_id, shared_with_id]
    )
  }
}