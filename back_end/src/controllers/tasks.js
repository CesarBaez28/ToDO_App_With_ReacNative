import { connection } from "../database";

export const getTasks = async (req, res) => {
  const con = await connection();
  const [rows] = await con.execute("SELECT 1 + 1");
  console.log(rows[0]);
  res.json(rows);
};