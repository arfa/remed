import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Background>
      <Header>Welcome to RE-MED Community</Header>

      <Paragraph>
        The RE-MED Project has benefited from funding from the EUROPEAN UNION, ENI CBC MED PROGRAM
        (Education, Research, Technological development and innovation)
      </Paragraph>

      <Paragraph>Under SUBSIDY AGREEMENT N°28/1682</Paragraph>

      <Button mode='contained' onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button mode='outlined' onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
};


export default memo(HomeScreen);
