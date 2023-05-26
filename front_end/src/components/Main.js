import { getTasks } from '../api';
import { useEffect } from 'react';
import LoginScreen from '../screens/Login';
import TodoList from '../screens/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const Main = () => {

  const loadTaks = async () => {
    const data = await getTasks();
    console.log(data);
  }

  useEffect(() => {
    loadTaks()
  }, [])

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <RootStack.Screen name="TodoList" options={{headerShown: false}} component={TodoList} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Main