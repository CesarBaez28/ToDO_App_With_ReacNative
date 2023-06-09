import AsyncStorage from '@react-native-async-storage/async-storage';

export let user;
export const setUserData = async () => {
  const userDataString = await AsyncStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  user = userData;
}