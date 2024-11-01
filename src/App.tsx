import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AuthApp from './AuthApp';
import {checkAuth} from './features/auth/state/authSlice';
import MainApp from './MainApp';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useAppSelector from './shared/hooks/useAppSelector';
import {useClientConfig} from './shared/hooks/useClientConfig';
import useEnvCheck from './shared/hooks/useEnvCheck';
import {useThemeColors} from './shared/hooks/useThemeColors';
import {store} from './store/store';

const RootComponent = () => {
  const {isEnvReady, missingVars} = useEnvCheck();
  const {clientConfig, error, loading} = useClientConfig();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authStatus = useAppSelector(state => state.auth.status);

  const processedTheme = useThemeColors();

  console.log('====================================');
  console.log('Client Config:', clientConfig);
  console.log('====================================');

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (!isEnvReady || authStatus === 'loading') {
    return null;
  }

  return isAuthenticated ? (
    <MainApp theme={processedTheme} />
  ) : (
    <AuthApp theme={processedTheme} />
  );
};

const App = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

export default App;
