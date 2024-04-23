import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

import App from './src';
import { theme } from './src/core/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locales/i18n';

export default function Main() {
  return (
    <I18nextProvider i18n={i18n}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </I18nextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
