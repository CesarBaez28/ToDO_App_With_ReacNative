import { StyleSheet, Text, View } from 'react-native';
import { getTasks } from '../api';
import { useEffect } from 'react';
import LoginScreen from '../screens/Login';
import { LinearGradient } from 'expo-linear-gradient';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
});

export default Main