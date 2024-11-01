import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AuthApp from './AuthApp';
import MainApp from './MainApp';
import useAppDispatch from './commons/hooks/useAppDispatch';
import useAppSelector from './commons/hooks/useAppSelector';
import {useClientConfig} from './commons/hooks/useClientConfig';
import useEnvCheck from './commons/hooks/useEnvCheck';
import {useThemeColors} from './commons/hooks/useThemeColors';
import {checkAuth} from './features/auth/state/authSlice';
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
