import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Settings,
  About,
} from './screens';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerRight: (props) => {
              return (
                <AntDesign
                  onPress={() => navigation.navigate('SettingsScreen')}
                  name='setting'
                  size={24}
                  color='black'
                />
              );
            },
            headerLeft: (props) => {
              return (
                <AntDesign
                  onPress={() => navigation.navigate('AboutScreen')}
                  name='infocirlceo'
                  size={24}
                  color='black'
                />
              );
            },
          })}
        />
        <Stack.Screen name='SettingsScreen' component={Settings} />
        <Stack.Screen name='AboutScreen' component={About} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
