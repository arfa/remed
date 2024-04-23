import React, { memo, useEffect, useState } from 'react';
import Background from '../components/Background';
import { Navigation } from '../types';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import i18next from 'i18next';
import storage from '../core/storage';
import { theme } from '../core/theme';
import { List } from 'react-native-paper';
import CountryFlag from 'react-native-country-flag';

type Props = {
  navigation: Navigation;
};

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
];

const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');

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

  const saveData = async () => {
    await storage.save({
      key: 'LANGUAGE', // Note: Do not use underscore("_") in key!
      data: selectedLanguage,
    });
  };

  return (
    <Background>
      <View style={styles.lang}>
        <Text style={styles.title}> {t('LANGUAGE')}</Text>

        <FlatList
          data={languages}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                i18next.changeLanguage(item.value); // it will change the language through out the app.
                setSelectedLanguage(item.value);
                saveData();
              }}
            >
              <List.Item
                titleStyle={selectedLanguage === item.value ? styles.selectedText : styles.text}
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
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  lang: {
    width: 365,
    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderStyle: 'solid',
  },
  title: {
    paddingTop: 34,
    paddingBottom: 20,

    fontStyle: 'normal',

    paddingLeft: 30,
    fontSize: 14,
    color: '#A8B4BF',
  },

  language: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedLanguage: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 14,
    color: '#576573',
  },
  selectedText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default memo(SettingsScreen);
