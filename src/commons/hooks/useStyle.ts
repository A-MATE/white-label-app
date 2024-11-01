import {Theme} from '@react-navigation/native';
import {useMemo} from 'react';
import {useThemeColors} from './useThemeColors';

export default function useStyle(
  styleSheet: (theme: Theme) => Record<string, any>,
) {
  const themeColors = useThemeColors();

  return useMemo(() => styleSheet(themeColors), [styleSheet, themeColors]);
}
