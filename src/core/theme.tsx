import { MD3Theme, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const brandColors = {
  primary: '#4fa166',
  secondary: '#414757',
  error: '#f13a59',
  surface: '#fff',
};

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...brandColors,
  },
};

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...brandColors,
  },
};
