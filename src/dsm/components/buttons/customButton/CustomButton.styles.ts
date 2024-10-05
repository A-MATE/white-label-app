import {StyleSheet} from 'react-native';
import {BorderRadius} from 'src/dsm/boderRadius.enum';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: 110,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      borderRadius: BorderRadius.xl,
    },
  });

export default styleSheet;
