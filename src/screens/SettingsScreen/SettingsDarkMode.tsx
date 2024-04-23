import React, { memo, useEffect, useState } from 'react';
import { Navigation } from '../../types';
import { useTranslation } from 'react-i18next';
import { View, FlatList, TouchableOpacity, Appearance, ColorSchemeName } from 'react-native';
import storage from '../../core/storage';
import { List, useTheme } from 'react-native-paper';
import { settingsStyles } from './styles';

type Props = {
  navigation: Navigation;
};

const colorsSchemes = [
  { label: 'Dark', value: 'dark' },
  { label: 'Light', value: 'light' },
  { label: 'System', value: null },
];

const SettingsDarkMode = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const theme = useTheme();

  const [nativeColorScheme, setNativeColorScheme] = useState<ColorSchemeName | string>(null);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await storage.load({ key: 'THEME' });
        setNativeColorScheme(value);
        Appearance.setColorScheme(value);
      } catch (error) {
        setNativeColorScheme(Appearance.getColorScheme());
      }
    };

    retrieveData();
  }, []);

  const saveTheme = async (value: string | null) => {
    await storage.save({
      key: 'THEME', // Note: Do not use underscore("_") in key!
      data: value,
    });
  };

  return (
    <View style={settingsStyles.lang}>
      <List.Section>
        <List.Subheader style={settingsStyles.title}> {t('DARK_MODE')}</List.Subheader>
        <FlatList
          data={colorsSchemes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                saveTheme(item.value);
                setNativeColorScheme(item.value);
                Appearance.setColorScheme(item.value as ColorSchemeName);
              }}
              style={
                nativeColorScheme === item.value
                  ? settingsStyles.selectedLanguage
                  : { backgroundColor: theme.colors.background }
              }
            >
              <List.Item
                titleStyle={
                  nativeColorScheme === item.value
                    ? { color: theme.colors.surface }
                    : { color: theme.colors.inverseSurface }
                }
                title={item.label}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={
                      item.value === 'light'
                        ? 'weather-sunny'
                        : item.value === 'dark'
                        ? 'moon-waxing-crescent'
                        : 'monitor-screenshot'
                    }
                  />
                )}
              />
            </TouchableOpacity>
          )}
        />
      </List.Section>
    </View>
  );
};

export default memo(SettingsDarkMode);
