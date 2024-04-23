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
    flex: 1,
    width: '100%',
    height: 100,
  },
});

export default memo(Logo);
