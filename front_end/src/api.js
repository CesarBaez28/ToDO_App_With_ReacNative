import { useEffect, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { setUserData, user } from "./asyncStorage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = "https://f567-206-85-14-11.ngrok.io/tasks";

//Get task from the api
export const getTasks = () => {

  const [listTasks, setTasks] = useState(null);
  
  async function loadTask() {
    const res = await fetch(API + `/${user.id}`);
    const data = await res.json();
    setTasks(data);
  }

  useEffect(() => {
    loadTask()
  }, [])

  return [listTasks, setTasks]
}

//Delete a task
export const deleteTask = async (id, listTasks, setTasks) => {

  const response = await fetch(API + `/${id}`, {
    method: 'DELETE',
  })

  console.log(response.status);
  setTasks(listTasks.filter((task) => task.id !== id))
}

//Change the status of the checkmark
export const toggleTask = async (id, listTasks, setTasks, completed) => {

  const response = await fetch(API + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: completed ? false : true
    })
  })

  const data = await response.json()

  setTasks(
    listTasks.map((task) =>
      task.id === id
        ? { ...task, completed: task.completed === 1 ? 0 : 1 }
        : task
    )
  );

  console.log(data)
}

//Share task 
export const shareTask = async (idUser, idTask, nameTask, email, resetForm, closeModal) => {
  const response = await fetch(API + "/shared_tasks", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      id_task: idTask,
      id_user: idUser,
      email: email
    })
  })

  const data = await response.json()
  console.log(data)
  Keyboard.dismiss()
  Alert.alert(
    "Felicidades",
    `Has compartido la tarea "${nameTask}" con ${email}`
  )
  resetForm({})
  closeModal()
}

//Get a shared task
export const getSharedTask = (id) => {

  const [author, setAuthor] = useState(null)
  const [sharedWith, setSharedWith] = useState(null)

  useEffect(() => {
    fetchInfo()
  }, [])

  async function fetchInfo() {
    const response = await fetch(API + `/shared_tasks/${id}`,
      {
        method: "GET"
      }
    );
    const { author, shared_with } = await response.json()
    setAuthor(author[0].name)
    setSharedWith(shared_with[0].name)
  }

  return [author, sharedWith]
}

//Add a new Task
export const AddTask = async (listTasks, setTasks, taskName) => {
  const response = await fetch(API, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      id_user: user.id,
      title: taskName
    })
  });

  const newTask = await response.json()
  setTasks([...listTasks, { ...newTask, id_shared_with: null }])
}

//Update a task
export const updateTask = async (idTask, nameTask, status, listTasks, setTasks) => {

  const response = fetch(API + `/edit/${idTask}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify({
      newName: nameTask,
      status: status
    })
  });

  console.log(typeof (status));

  setTasks(
    listTasks.map((task) =>
      task.id === idTask
        ? { ...task, name: nameTask, completed: status }
        : task
    )
  );
}

//Login 
export const login = async (email, password, setError, navigation) => {
  try {
    const response = await fetch(API + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data[0] === 'Usuario no encontrado') {
      setError({email: "Usuario no encontrado"});
      return
    }

    if (data[0] === 'Contraseña incorrecta') {
      setError({password: "Contraseña incorrecta. Intente de nuevo"});
      return
    }
    
    await AsyncStorage.setItem('userData', JSON.stringify(data))
    await setUserData();
    navigation.navigate('TodoList')
  } catch (err) {
    console.log(err.message);
  }
}