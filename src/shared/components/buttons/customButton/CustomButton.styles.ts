import {StyleSheet} from 'react-native';
import {AppTheme} from 'src/shared/types/theme.type';

const styleSheet = ({customColors, borderRadius}: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 40,
      width: 115,
      justifyContent: 'center',
      alignItems: 'center',
    },
    defaultContainer: {
      backgroundColor: customColors.button.default.background,
      borderRadius: borderRadius.button,
      borderWidth: 1,
      borderColor: customColors.button.default.border,
    },
    outlinedContainer: {
      backgroundColor: customColors.button.outlined.background,
      borderRadius: borderRadius.button,
      borderWidth: 1,
      borderColor: customColors.button.outlined.border,
    },
    ghostContainer: {
      backgroundColor: customColors.button.ghost.background,
      borderRadius: borderRadius.button,
      borderWidth: 0,
    },
    defaultTitle: {
      color: customColors.button.default.text,
    },
    outlinedTitle: {
      color: customColors.button.outlined.text,
    },
    ghostTitle: {
      color: customColors.button.ghost.text,
    },
  });

export default styleSheet;
