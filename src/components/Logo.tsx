import React, { memo } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Logo = () => (
  <ImageBackground
    source={require('../assets/partners_color.png')}
    style={styles.image}
    resizeMode='cover'
  />
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    marginBottom: 50,
    marginTop: 50,
  },
});

export default memo(Logo);
