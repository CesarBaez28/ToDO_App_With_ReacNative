import { getTasks } from '../api';
import { useEffect } from 'react';
import LoginScreen from '../screens/Login';

const Main = () => {

  const loadTaks = async () => {
    const data = await getTasks();
    console.log(data);
  }

  useEffect(() => {
    loadTaks()
  }, [])

  return (
    <LoginScreen />
  )
}

export default Main