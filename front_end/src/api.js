import { useEffect, useState } from "react";

const API = "https://9161-206-85-14-1.ngrok.io/tasks";

export const getTasks = (id) => {

  const [listTasks, setTasks] = useState(null);

  async function loadTask() {
    const res = await fetch(API+`/${id}`);
    const data = await res.json();
    setTasks(data);
  }

  useEffect(() => {
    loadTask()
  }, [])

  return listTasks
}