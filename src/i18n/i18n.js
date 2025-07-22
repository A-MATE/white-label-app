import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';

const resources = {
  en: {translation: en},
  fr: {translation: fr},
  es: {translation: es},
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    console.log('=== LanguageDetector: detect called ===');
    try {
      const locales = RNLocalize.getLocales();
      console.log('Locales:', locales);
      const bestLanguage = locales[0]?.languageCode || 'en';
      console.log('Best Language:', bestLanguage);
      callback(bestLanguage);
    } catch (error) {
      console.error('Error in language detection:', error);
      callback('en');
    }
  },
  init: () => {
    console.log('=== LanguageDetector: init called ===');
  },
  cacheUserLanguage: () => {
    console.log('=== LanguageDetector: cacheUserLanguage called ===');
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  })
  .then(() => {
    console.log('=== i18next initialized successfully ===');
    console.log('Current language:', i18n.language);
  })
  .catch(error => {
    console.error('=== i18next initialization failed ===', error);
  });

export default i18n;
