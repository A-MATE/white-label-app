import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AuthApp from './AuthApp';

import MainApp from './MainApp';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useAppSelector from './shared/hooks/useAppSelector';

import {store} from './store/store';
import {useAppTheme} from './shared/hooks/useAppTheme';
import {checkAuth} from './features/auth/services/authThunks';

const RootComponent = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authStatus = useAppSelector(state => state.auth.status);

  const clientTheme = useAppTheme();

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
