import { StyleSheet, Text, View } from 'react-native';
import { getTasks } from '../api';
import { useEffect } from 'react';

const Main = () => {

  const loadTaks = async () => {
    const data = await getTasks();
    console.log(data);
  }

  useEffect(() => {
    loadTaks()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main