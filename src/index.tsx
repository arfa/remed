import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './screens';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
