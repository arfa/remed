import { StyleSheet } from 'react-native';
import { brandColors } from '../../core/theme';

export const settingsStyles = StyleSheet.create({
  lang: {
    width: '100%',

    borderWidth: 1,
    borderColor: '#A8B4BF',
    borderStyle: 'solid',
    marginBottom: 20,
  },
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
