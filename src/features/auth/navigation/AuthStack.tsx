import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LandingView from '../screens/landing/LandingView';
import SigninScreen from '../screens/signin/SigninScreen';
import SignupScreen from '../screens/signup/SignupScreen';

const SignupStack = createNativeStackNavigator();

const SignupNavigator = () => {
  const navigation = useNavigation();

  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        options={{
          headerShown: false,
        }}
        name="signup-view"
        component={SignupScreen}
      />
    </SignupStack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="landing-view" component={LandingView} />
      <Stack.Screen name="signin-view" component={SigninScreen} />
      <Stack.Screen name="signup-stack" component={SignupNavigator} />
    </Stack.Navigator>
  );
};
