import { memo, ReactNode } from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type Props = {
  children: ReactNode;
};

const Background = ({ children }: Props) => {
  const theme = useTheme();
  return(
  <View
    style={{...styles.background, backgroundColor: theme.colors.background}}
  >
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      {children}
    </KeyboardAvoidingView>
  </View>
)};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 30,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default memo(Background);
