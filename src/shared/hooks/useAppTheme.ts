import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import config from 'src/config/config';
import {AppTheme} from 'src/shared/types/theme.type';

export const useAppTheme = (): AppTheme => {
  const colorScheme = useColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';

  const baseTheme = isDark ? DarkTheme : DefaultTheme;
  const customColors = config.theme.colors[colorScheme];
  const borderRadius = config.theme.borderRadius;

  const theme: AppTheme = {
    ...baseTheme,
    dark: isDark,
    colors: {
      ...baseTheme.colors,
      primary: customColors.brand.primary,
      background: customColors.background.screen,
      card: customColors.card.background,
      text: customColors.text.default,
      border: customColors.card.border,
      notification: customColors.status.info.background,
    },
    customColors,
    borderRadius,
  };

  return theme;
};
