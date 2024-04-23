import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';
import { Linking, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { brandColors } from '../core/theme';
import { Divider } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

type Props = {
  navigation: Navigation;
};

const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <Background>
      <Logo />

      <Paragraph>
        The RE-MED Project has benefited from funding from the EUROPEAN UNION, ENI CBC MED PROGRAM
        (Education, Research, Technological development and innovation)
      </Paragraph>
      <Paragraph>Under SUBSIDY AGREEMENT N°28/1682</Paragraph>

      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          {t('VISIT')}{' '}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://mywebsite.com/help')}>
          <Text style={styles.label}>{t('WEBSITE')}</Text>
        </TouchableOpacity>
      </View>

      <Divider />

      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          {t('CHECK_OUT')}{' '}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://mywebsite.com/help')}>
          <Text style={styles.label}>{t('POINTS_REMED')}</Text>
        </TouchableOpacity>
      </View>

      <Divider />

      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          {t('LEARN_MORE')}{' '}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
          style={{ marginBottom: 50 }}
        >
          <Text style={styles.label}>{t('ABOUT_US')}</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: brandColors.primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default memo(SettingsScreen);
