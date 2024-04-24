import React, { memo, useEffect, useState } from 'react';
import { Navigation } from '../../types';
import { useTranslation } from 'react-i18next';
import { View, FlatList, TouchableOpacity } from 'react-native';
import i18next from 'i18next';
import storage from '../../core/storage';
import { Card, List, useTheme } from 'react-native-paper';
import CountryFlag from 'react-native-country-flag';
import { settingsStyles } from './styles';

type Props = {
  navigation: Navigation;
};

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
];

const SettingsLang = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const theme = useTheme();

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

  const saveLang = async (value: string) => {
    await storage.save({
      key: 'LANGUAGE', // Note: Do not use underscore("_") in key!
      data: value,
    });
  };

  return (
    <Card
      style={{
        width: '100%',
        marginBottom: 20,
      }}
      elevation={0}
    >
      <Card.Content>

      <List.Section>
        <List.Subheader style={settingsStyles.title}> {t('LANGUAGE')}</List.Subheader>
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
                  ? settingsStyles.selectedLanguage
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
    </Card.Content>
  </Card>
  );
};

export default memo(SettingsLang);
