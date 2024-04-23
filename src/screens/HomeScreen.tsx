import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import { Navigation } from '../types';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  
  return (
    <Background>
      <Header>{t('WELCOME_TO_REMED')}</Header>

      <Logo />

      <Button mode='contained' onPress={() => navigation.navigate('LoginScreen')}>
        {t('LOGIN')}
      </Button>
      <Button mode='outlined' onPress={() => navigation.navigate('RegisterScreen')}>
        {t('SIGNUP')}
      </Button>
    </Background>
  );
};


export default memo(HomeScreen);
