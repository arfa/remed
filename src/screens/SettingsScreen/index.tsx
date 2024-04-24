import React, { memo } from 'react';
import Background from '../../components/Background';
import { Navigation } from '../../types';
import SettingsLang from './SettingsLang';
import SettingsDarkMode from './SettingsDarkMode';
import { Divider } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <Background>
      <SettingsLang navigation={navigation} />
      <Divider style={{width: '100%'}}/>
      <SettingsDarkMode navigation={navigation} />
    </Background>
  );
};

export default memo(SettingsScreen);
