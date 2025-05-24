import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {BorderRadius} from 'src/shared/styles/boderRadius.enum';

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 40,
      width: 115,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: BorderRadius.xl,
    },
  });

export default styleSheet;
