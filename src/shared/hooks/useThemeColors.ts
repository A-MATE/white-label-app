import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {darkColors} from 'src/shared/styles/colors/dark/colors';
import {lightColors} from 'src/shared/styles/colors/light/colors';

export const useThemeColors = (): Theme => {
  const colorScheme = useColorScheme();
  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...(colorScheme === 'dark' ? darkColors : lightColors),
    },
  };

  return theme;
};
