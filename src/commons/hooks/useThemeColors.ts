import {useColorScheme} from 'react-native';
import {darkColors} from 'src/dsm/colors/dark/colors';
import {lightColors} from 'src/dsm/colors/light/colors';

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
};
