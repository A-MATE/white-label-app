import {StyleSheet} from 'react-native';
import {Spacing} from 'src/shared/styles/spacing.enum';
import {AppTheme} from 'src/shared/types/theme.type';

const styleSheet = ({customColors, borderRadius}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: 230,
      height: 50,
      borderRadius: borderRadius.input,
      borderBottomColor: customColors.input.border,
      borderBottomWidth: 1,
      justifyContent: 'center',
      padding: 10,
      margin: Spacing.md,
    },
    input: {
      color: customColors.input.text,
    },
  });

export default styleSheet;
