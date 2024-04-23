import React, { memo, useEffect, useState } from 'react';
import Background from '../components/Background';
import { Navigation } from '../types';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import i18next from 'i18next';

type Props = {
  navigation: Navigation;
};

const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },

    // Add more languages as needed
  ];
  const [selectedLanguage, setSelectedLanguage] = useState('');
  useEffect(() => {
    setSelectedLanguage(i18next.language);
  }, []);

  return (
    <Background>
      <View style={styles.lang}>
        <Text style={styles.sTitle1}> {t('LANGUAGE')}</Text>
        <Text style={styles.sTitle2}>{t('SELECT')} </Text>

        <FlatList
          data={languages}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedLanguage(item.value);
              }}
              style={selectedLanguage === item.value ? styles.selectedLanguage : styles.language}
            >
              <Text style={selectedLanguage === item.value ? styles.selectedText : styles.text}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.btns}>
          <TouchableOpacity
            style={{
              width: 143,
              height: 48,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#FF5757',
              borderStyle: 'solid',
            }}
          >
            <Text
              style={{
                
                fontStyle: 'normal',

                color: '#FF5757',
              }}
            >
              {t('CANCEL')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              i18next.changeLanguage(selectedLanguage); // it will change the language through out the app.
            }}
            style={{
              width: 150,
              height: 48,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2352D8',
            }}
          >
            <Text
              style={{
                color: '#F7F9FA',
                
                fontStyle: 'normal',
              }}
            >
              {t('SAVE')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  lang: {
    width: 365,
    backgroundColor: '#FFFFFF',

    // border: 1px solid #E9EDF2;
    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderRadius: 16,
    borderStyle: 'solid',
  },
  sTitle1: {
    paddingTop: 34,
    
    fontStyle: 'normal',

    paddingLeft: 30,
    fontSize: 14,
    color: '#A8B4BF',
  },
  sTitle2: {
    paddingTop: 20,
    paddingBottom: 20,
    
    fontStyle: 'normal',
    paddingLeft: 30,
    fontSize: 12,

    color: '#576573',
  },
  languageItem: {
    height: 50,

    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  texts: {
    
    fontStyle: 'normal',
    color: '#576573',

    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  language: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedLanguage: {
    padding: 10,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 14,
    color: '#576573',
  },
  selectedText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default memo(SettingsScreen);
