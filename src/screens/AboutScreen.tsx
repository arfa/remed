import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';
import { Linking, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { theme } from '../core/theme';
import { Divider } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <Background>
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
          Visit our{' '}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://mywebsite.com/help')}>
          <Text style={styles.label}>Website</Text>
        </TouchableOpacity>
      </View>

      <Divider />

      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          Check all the actual{' '}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://mywebsite.com/help')}>
          <Text style={styles.label}>RE-MED points</Text>
        </TouchableOpacity>
      </View>

      <Divider />

      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          Learn more{' '}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
          style={{ marginBottom: 50 }}
        >
          <Text style={styles.label}>About us</Text>
        </TouchableOpacity>
      </View>

      <Logo />
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default memo(SettingsScreen);
