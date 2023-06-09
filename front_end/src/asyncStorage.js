import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export const getUserData = async () => {
  const userDataString = await AsyncStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  return userData;
}

export const getUserDataForComponents = () => {
  const [user, setUser] = useState(null);

  async function getUser () {
    const userData = await getUserData();
    setUser(userData)
  } 

  useEffect(()=>{
    getUser();
  }, [])

  return [user, setUser];
}

export const getInitials = (name) => {
  let initials = name[0];
  for (let index = 1; index < name.length; index++) {
    if(name[index] === ' ') {
      initials += name[index+1];
      break;
    }    
  }
  return initials;
}

export const logout = (navigation) => {
  AsyncStorage.removeItem('userData');
  navigation.navigate('Login');
}