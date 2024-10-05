import {useMemo} from 'react';
import {useThemeColors} from './useThemeColors';

export default function useStyle(
  styleSheet: (theme: Record<string, any>) => Record<string, any>,
) {
  const themeColors = useThemeColors();

  return useMemo(() => styleSheet(themeColors), [styleSheet, themeColors]);
}
