import {Theme as NavigationTheme} from '@react-navigation/native';

export interface AppTheme extends NavigationTheme {
  customColors: ThemeColors;
  borderRadius: {
    default: number;
    button: number;
    card: number;
    input: number;
  };
}

export interface ThemeColors {
  brand: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  background: {
    screen: string;
    surface: string;
  };
  text: {
    default: string;
    secondary: string;
    inverse: string;
    disabled: string;
  };
  button: {
    default: {
      background: string;
      text: string;
      border: string;
    };
    outlined: {
      background: string;
      text: string;
      border: string;
    };
    ghost: {
      background: string;
      text: string;
      border: string;
    };
  };
  card: {
    background: string;
    border: string;
    shadow: string;
  };
  input: {
    background: string;
    border: string;
    text: string;
    placeholder: string;
    focusBorder: string;
  };
  status: {
    success: {
      background: string;
      text: string;
    };
    warning: {
      background: string;
      text: string;
    };
    error: {
      background: string;
      text: string;
    };
    info: {
      background: string;
      text: string;
    };
  };
  nav: {
    background: string;
    icon: string;
    activeIcon: string;
  };
}

export interface Theme {
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  borderRadius: {
    default: number;
    button: number;
    card: number;
    input: number;
  };
  typography: {
    fontFamily: string;
  };
}
