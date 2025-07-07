import {AppConfig} from 'src/shared/types/app-config.type';

const config: AppConfig = {
  app_name: 'AMSC',
  bundle_id: 'com.a-mate.amsc',
  theme: {
    colors: {
      light: {
        brand: {
          primary: '#ef2e32',
          secondary: '#a5a6a5',
          tertiary: '',
        },
        background: {
          screen: '#FFFFFF',
          surface: '#F5F5F5',
        },
        text: {
          default: '#000000',
          secondary: '#666666',
          inverse: '#FFFFFF',
          disabled: '#CCCCCC',
        },
        button: {
          default: {
            background: '#000000',
            text: '#FFFFFF',
            border: '#000000',
          },
          outlined: {
            background: 'transparent',
            text: '#000000',
            border: '#000000',
          },
          ghost: {
            background: 'transparent',
            text: '#000000',
            border: 'transparent',
          },
        },
        card: {
          background: '#FFFFFF',
          border: '#E0E0E0',
          shadow: 'rgba(0,0,0,0.1)',
        },
        input: {
          background: '#FFFFFF',
          border: '#CCCCCC',
          text: '#000000',
          placeholder: '#999999',
          focusBorder: '#FF0000',
        },
        status: {
          success: {
            background: '#DFF0D8',
            text: '#3C763D',
          },
          warning: {
            background: '#FCF8E3',
            text: '#8A6D3B',
          },
          error: {
            background: '#F2DEDE',
            text: '#A94442',
          },
          info: {
            background: '#D9EDF7',
            text: '#31708F',
          },
        },
        nav: {
          background: '#FFFFFF',
          icon: '#000000',
          activeIcon: '#FF0000',
        },
      },
      dark: {
        brand: {
          primary: '#FF5555',
          secondary: '#55FF55',
          tertiary: '#5555FF',
        },
        background: {
          screen: '#121212',
          surface: '#1E1E1E',
        },
        text: {
          default: '#FFFFFF',
          secondary: '#AAAAAA',
          inverse: '#000000',
          disabled: '#555555',
        },
        button: {
          default: {
            background: '#FFFFFF',
            text: '#000000',
            border: '#000000',
          },
          outlined: {
            background: 'transparent',
            text: '#FFFFFF',
            border: '#FFFFFF',
          },
          ghost: {
            background: 'transparent',
            text: '#FFFFFF',
            border: 'transparent',
          },
        },
        card: {
          background: '#1E1E1E',
          border: '#333333',
          shadow: 'rgba(0,0,0,0.4)',
        },
        input: {
          background: '#1E1E1E',
          border: '#555555',
          text: '#FFFFFF',
          placeholder: '#AAAAAA',
          focusBorder: '#FF5555',
        },
        status: {
          success: {
            background: '#2E7D32',
            text: '#A5D6A7',
          },
          warning: {
            background: '#FBC02D',
            text: '#FFF59D',
          },
          error: {
            background: '#C62828',
            text: '#EF9A9A',
          },
          info: {
            background: '#0288D1',
            text: '#81D4FA',
          },
        },
        nav: {
          background: '#1E1E1E',
          icon: '#AAAAAA',
          activeIcon: '#FF5555',
        },
      },
    },
    borderRadius: {
      default: 8,
      button: 24,
      card: 12,
      input: 4,
    },
    typography: {
      fontFamily: 'Helvetica',
    },
  },
  features: {
    landing: {
      enabled: true,
      version: 1,
    },
    signin: {
      enabled: true,
      version: 1,
    },
    signup: {
      enabled: true,
      version: 1,
    },
    profile: {
      enabled: true,
      version: 1,
    },
    games: {
      enabled: true,
      version: 1,
    },
    home: {
      enabled: true,
      version: 1,
    },
    moments: {
      enabled: true,
      version: 1,
    },
    club: {
      enabled: true,
      version: 1,
    },
    media: {
      enabled: true,
      version: 1,
    },
  },
};

export default config;
