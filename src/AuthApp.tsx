import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {FC} from 'react';
import {AuthStack} from './features/auth/navigation/AuthStack';

type AuthAppProps = {
  theme: Theme;
};
const AuthApp: FC<AuthAppProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AuthApp;
