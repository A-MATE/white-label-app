import {Theme} from '@react-navigation/native';
import {useMemo} from 'react';
import {useAppTheme} from './useAppTheme';

export default function useStyle(
  styleSheet: (theme: Theme) => Record<string, any>,
) {
  const themeColors = useAppTheme();

  return useMemo(() => styleSheet(themeColors), [styleSheet, themeColors]);
}
