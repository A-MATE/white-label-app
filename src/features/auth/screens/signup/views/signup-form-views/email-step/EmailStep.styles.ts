import {StyleSheet} from 'react-native';
import {BorderRadius} from 'src/shared/styles/boderRadius.enum';
import {Spacing} from 'src/shared/styles/spacing.enum';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // borderColor: 'red',
      // borderWidth: 1,
    },
    blurCard: {
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.xxl,
      borderRadius: BorderRadius.md,
    },
  });

export default styleSheet;
