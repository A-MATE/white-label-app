import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AuthApp from './AuthApp';
import {checkAuth} from './features/auth/state/authSlice';
import MainApp from './MainApp';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useAppSelector from './shared/hooks/useAppSelector';
import config from './config/config.js';

// import useEnvCheck from './shared/hooks/useEnvCheck';
import {useThemeColors} from './shared/hooks/useThemeColors';
import {store} from './store/store';

const RootComponent = () => {
  // const {isEnvReady, missingVars} = useEnvCheck();

  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authStatus = useAppSelector(state => state.auth.status);

  const processedTheme = useThemeColors();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (authStatus === 'loading') {
    return null;
  }

  return isAuthenticated ? (
    <MainApp theme={{...processedTheme, ...config}} />
  ) : (
    <AuthApp theme={{...processedTheme, ...config}} />
  );
};

const App = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

export default App;
