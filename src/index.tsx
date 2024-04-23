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
import { useTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

function App() {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: theme.colors.background },
          headerTintColor: theme.colors.inverseSurface,
          statusBarColor: theme.colors.background,
          statusBarStyle: colorScheme === 'dark' ? 'light' : 'dark',
        }}
      >
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
                  color={theme.colors.inverseSurface}
                />
              );
            },
            headerLeft: (props) => {
              return (
                <AntDesign
                  onPress={() => navigation.navigate('AboutScreen')}
                  name='infocirlceo'
                  size={24}
                  color={theme.colors.inverseSurface}
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
