import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {BorderRadius} from 'src/commons/styles/boderRadius.enum';

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: 110,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: BorderRadius.xl,
    },
  });

export default styleSheet;
