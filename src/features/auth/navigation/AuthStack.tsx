import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LandingView from '../screens/landing/LandingScreen';
import SigninScreen from '../screens/signin/SigninScreen';
import SignupScreen from '../screens/signup/SignupScreen';

const SignupStack = createNativeStackNavigator();

const SignupNavigator = () => {
  return (
    <SignupStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SignupStack.Screen name="signup-view" component={SignupScreen} />
    </SignupStack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,

      headerTransparent: true,
      headerTitle: '',
    }}>
    <Stack.Screen
      name="landing-view"
      component={LandingView}
      options={{
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    />

    <Stack.Screen name="signin-view" component={SigninScreen} />
    <Stack.Screen name="signup-stack" component={SignupNavigator} />
  </Stack.Navigator>
);

export default AuthStack;
