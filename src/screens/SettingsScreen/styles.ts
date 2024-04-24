import { StyleSheet } from 'react-native';
import { brandColors } from '../../core/theme';

export const settingsStyles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 20,

    fontStyle: 'normal',

    paddingLeft: 30,
    fontSize: 14,
    color: '#A8B4BF',
  },

  selectedLanguage: {
    backgroundColor: brandColors.primary,
    color: '#fff',
  },
});
