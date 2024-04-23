import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { brandColors } from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: brandColors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
    textAlign: 'center',
  },
});

export default memo(Header);
