import LoginScreen from '../screens/Login';
import TodoList from '../screens/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModalPerfil from '../screens/ModalPerfil';
import StyledLink from './StyledLink';
import CreateAccount from '../screens/CreateAccount';
import theme from '../theme';

const RootStack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <RootStack.Screen name="TodoList" options={{ headerShown: false }} component={TodoList} />
          <RootStack.Screen name="CreateAccount" 
          options = {{ 
            headerBackTitle: false, 
            title: 'Crear cuenta de usuario', 
            headerTintColor: theme.colors.textsecundary,
            headerStyle: {backgroundColor: theme.colors.primary}
        
          }} 
          component={CreateAccount} 
          />
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