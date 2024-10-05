import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from 'react-native';
import LandingView from '../screens/landing/LandingView';
import SigninScreen from '../screens/signin/SigninScreen';
import SignupScreen from '../screens/signup/SignupScreen';

const RegisterStack = createNativeStackNavigator();

const SignupNavigator = () => {
  const navigation = useNavigation();

  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          headerLeft: () => (
            <Button title="back" onPress={() => navigation.goBack()} />
          ),
        }}
        name="SignupScreen"
        component={SignupScreen}
      />
    </RegisterStack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingView" component={LandingView} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Register" component={SignupNavigator} />
    </Stack.Navigator>
  );
};
