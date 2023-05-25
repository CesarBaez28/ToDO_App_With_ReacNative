import { getTasks } from '../api';
import { useEffect } from 'react';
import LoginScreen from '../screens/Login';
import TodoList from '../screens/TodoList';

const Main = () => {

  const loadTaks = async () => {
    const data = await getTasks();
    console.log(data);
  }

  useEffect(() => {
    loadTaks()
  }, [])

  return (
    <TodoList />
  )
}

export default Main