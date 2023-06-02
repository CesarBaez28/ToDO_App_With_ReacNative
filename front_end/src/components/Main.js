import LoginScreen from '../screens/Login';
import TodoList from '../screens/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModalPerfil from '../screens/ModalPerfil';
import StyledLink from './StyledLink';

const RootStack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <RootStack.Screen name="TodoList" options={{ headerShown: false }} component={TodoList} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            options={{
              headerTitle: 'Configuración',
              headerLeft: () => null,
              headerRight: ({ }) => (
                <StyledLink
                  to={'/TodoList'}
                  color={'blue'}
                  fontSize={'subheading'}
                  margin={'right'}
                  decorationLine={'underline'}>Hecho</StyledLink>
              ),
            }}
            name="ModalPerfil" component={ModalPerfil}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Main