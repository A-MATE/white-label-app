import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useAppSelector from './shared/hooks/useAppSelector';
import {checkAuth} from './features/auth/services/authThunks';
import {useAppTheme} from './shared/hooks/useAppTheme';

import AuthApp from './AuthApp';
import MainApp from './MainApp';

export default function RootComponent() {
  const dispatch = useAppDispatch();
  const {isAuthenticated, status: authStatus} = useAppSelector(s => s.auth);
  const theme = useAppTheme();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (authStatus === 'loading') {
    return null;
  }

  return (
    <>
      {isAuthenticated ? <MainApp theme={theme} /> : <AuthApp theme={theme} />}
    </>
  );
}
