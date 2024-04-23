import * as React from 'react';
import { Appearance, AppRegistry, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

import App from './src';
import { darkTheme, lightTheme } from './src/core/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locales/i18n';
import storage from './src/core/storage';

export default function Main() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  React.useEffect(() => {
    const retrieveData = async () => {
      const value = await storage.load({ key: 'THEME' });
      Appearance.setColorScheme(value);
    };

    retrieveData();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </I18nextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
