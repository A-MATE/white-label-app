import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {BorderRadius} from 'src/shared/styles/boderRadius.enum';
import {Spacing} from 'src/shared/styles/spacing.enum';

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      paddingVertical: Spacing.xxxxl,
      paddingHorizontal: Spacing.lg,
      borderRadius: BorderRadius.md,

      marginVertical: Spacing.xxxl,
    },
    canva: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: BorderRadius.md,
    },
    blurView: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: BorderRadius.md,
    },
  });

export default styleSheet;
