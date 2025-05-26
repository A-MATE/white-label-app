import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AuthApp from './AuthApp';
import {checkAuth} from './features/auth/state/authSlice';
import MainApp from './MainApp';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useAppSelector from './shared/hooks/useAppSelector';

import {useThemeColors} from './shared/hooks/useThemeColors';
import {store} from './store/store';

const RootComponent = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authStatus = useAppSelector(state => state.auth.status);

  const clientTheme = useThemeColors();

  console.log('==============CLIENT THEME======================');
  console.log(clientTheme);
  console.log('====================================');

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
