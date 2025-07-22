import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import RootComponent from './RootComponent';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n/i18n';

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <RootComponent />
    </I18nextProvider>
  </Provider>
);

export default App;
