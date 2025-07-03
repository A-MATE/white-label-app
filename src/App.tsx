import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import AuthApp from './AuthApp';

import MainApp from './MainApp';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useAppSelector from './shared/hooks/useAppSelector';

import {store} from './store/store';
import {useAppTheme} from './shared/hooks/useAppTheme';
import {checkAuth} from './features/auth/services/authThunks';
import {createIntl, createIntlCache} from 'react-intl';
import frMessages from '../locales/fr.json';
import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';
import {Button, I18nManager, Text, View} from 'react-native';

const supportedLocales = ['fr', 'en', 'es'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

const cache = createIntlCache();

const messagesByLocale: Record<SupportedLocale, Record<string, string>> = {
  fr: frMessages,
  en: enMessages,
  es: esMessages,
};

const RootComponent = () => {
  const [locale, setLocale] = useState<SupportedLocale>('fr');
  const [intl, setIntl] = useState(
    createIntl({locale, messages: messagesByLocale[locale]}, cache),
  );
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authStatus = useAppSelector(state => state.auth.status);

  const clientTheme = useAppTheme();

  useEffect(() => {
    setIntl(createIntl({locale, messages: messagesByLocale[locale]}, cache));

    I18nManager.forceRTL(locale === 'fr');
  }, [locale]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (authStatus === 'loading') {
    return null;
  }

  return isAuthenticated ? (
    <MainApp theme={clientTheme} />
  ) : (
    <AuthApp theme={clientTheme} />
  );
};

const App = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

export default App;
