import React, { memo, useEffect, useState } from 'react';
import Background from '../components/Background';
import { Navigation } from '../types';
import { useTranslation } from 'react-i18next';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  Appearance,
  ColorSchemeName,
} from 'react-native';
import i18next from 'i18next';
import storage from '../core/storage';
import { brandColors } from '../core/theme';
import { List, useTheme } from 'react-native-paper';
import CountryFlag from 'react-native-country-flag';

type Props = {
  navigation: Navigation;
};

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
];

const colorsSchemes = [
  { label: 'Dark', value: 'dark' },
  { label: 'Light', value: 'light' },
  { label: 'System', value: null },
];

const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const theme = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState('');

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

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await storage.load({ key: 'LANGUAGE' });
        setSelectedLanguage(value);
      } catch (error) {
        setSelectedLanguage(i18next.language);
      }
    };
    retrieveData();
  }, []);

  const saveLang = async (value: string) => {
    await storage.save({
      key: 'LANGUAGE', // Note: Do not use underscore("_") in key!
      data: value,
    });
  };

  const saveTheme = async (value: string | null) => {
    await storage.save({
      key: 'THEME', // Note: Do not use underscore("_") in key!
      data: value,
    });
  };

  return (
    <Background>
      <View style={{ ...styles.lang, backgroundColor: theme.colors.background }}>
        <List.Section>
          <List.Subheader style={styles.title}> {t('LANGUAGE')}</List.Subheader>
          <FlatList
            data={languages}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  i18next.changeLanguage(item.value); // it will change the language through out the app.
                  setSelectedLanguage(item.value);
                  saveLang(item.value);
                }}
                style={
                  selectedLanguage === item.value
                    ? styles.selectedLanguage
                    : {
                        backgroundColor: theme.colors.background,
                      }
                }
              >
                <List.Item
                  titleStyle={
                    selectedLanguage === item.value
                      ? { color: theme.colors.surface }
                      : { color: theme.colors.inverseSurface }
                  }
                  title={item.label}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon={() => (
                        <CountryFlag isoCode={item.value === 'en' ? 'us' : item.value} size={25} />
                      )}
                    />
                  )}
                />
              </TouchableOpacity>
            )}
          />
        </List.Section>
      </View>

      <View style={styles.lang}>
        <List.Section>
          <List.Subheader style={styles.title}> {t('DARK_MODE')}</List.Subheader>
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
                    ? styles.selectedLanguage
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

      <View>
        <Text style={{ color: '#A8B4BF' }}>Native colorScheme: {nativeColorScheme}</Text>
        <Text style={{ color: '#A8B4BF' }}>Current colorScheme: {colorScheme}</Text>
      </View>

       <View
        style={{
          backgroundColor: theme.colors.background,
          height: '100%',
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.primary,
            margin: 5,
            padding: 10,
          }}
        >
          <Text style={{ color: theme.colors.surface }}>primary</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.secondary,
            margin: 5,
            padding: 10,
          }}
        >
          <Text style={{ color: theme.colors.surface }}>secondary</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.error,
            margin: 5,
            padding: 10,
          }}
        >
          <Text style={{ color: theme.colors.surface }}>error</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.tertiary,
            margin: 5,
            padding: 10,
          }}
        >
          <Text style={{ color: theme.colors.surface }}>tertiary</Text>
        </View>
      </View> 
    </Background>
  );
};

const styles = StyleSheet.create({
  lang: {
    width: 365,

    borderWidth: 1,
    borderColor: '#A8B4BF',
    borderStyle: 'solid',
    marginBottom: 20,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,

    fontStyle: 'normal',

    paddingLeft: 30,
    fontSize: 14,
    color: '#A8B4BF',
  },

  language: {
    backgroundColor: brandColors.secondary,
  },
  selectedLanguage: {
    backgroundColor: brandColors.primary,
    color: '#fff',
  },
});

export default memo(SettingsScreen);
