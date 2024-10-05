import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStack} from './features/auth/navigation/AuthStack';

const AuthApp = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AuthApp;
