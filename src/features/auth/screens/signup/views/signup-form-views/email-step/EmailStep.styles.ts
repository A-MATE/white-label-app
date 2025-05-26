import {StyleSheet} from 'react-native';
import {Spacing} from 'src/shared/styles/spacing.enum';
import {AppTheme} from 'src/shared/types/theme.type';

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    blurCard: {
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.xxl,
      borderRadius: theme.borderRadius.card,
    },
  });

export default styleSheet;
