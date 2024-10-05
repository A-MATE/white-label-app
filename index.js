import React, {useEffect} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import AuthApp from 'src/AuthApp';
import useAppDispatch from 'src/commons/hooks/useAppDispatch';
import useAppSelector from 'src/commons/hooks/useAppSelector';
import useEnvCheck from 'src/commons/hooks/useEnvCheck';
import {checkAuth} from 'src/features/auth/state/authSlice';
import MainApp from 'src/MainApp';
import {store} from './src/store/store';

const RootComponent = () => {
  const {isEnvReady, missingVars} = useEnvCheck();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authStatus = useAppSelector(state => state.auth.status);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (!isEnvReady) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {missingVars.length > 0 ? (
          <Text>Missing environment variables: {missingVars.join(', ')}</Text>
        ) : (
          <Text>Loading environment...</Text>
        )}
      </View>
    );
  }

  if (authStatus === 'loading') {
    return null;
  }

  return isAuthenticated ? <MainApp /> : <AuthApp />;
};

const App = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
