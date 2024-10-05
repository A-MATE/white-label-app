import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

import {useNavigation, useTheme} from '@react-navigation/native';
import SigninScreen from '../screens/signin/SigninScreen';
import SignupScreen from '../screens/signup/SignupScreen';

const RegisterStack = createNativeStackNavigator();

const SignupNavigator = () => {
  const navigation = useNavigation();

  return (
    <>
      <RegisterStack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: true,
          headerStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen
          options={{
            // headerShown: true,
            headerLeft: () => (
              <Button title="back" onPress={() => navigation.goBack()} />
            ),
          }}
          name="SignupScreen"
          component={SignupScreen}
        />
      </RegisterStack.Navigator>
    </>
  );
};

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
        headerStyle: {backgroundColor: theme.colors.background},
        headerShadowVisible: false,

        headerTitle: () => (
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'red',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>A-MATE SPORTS</Text>
          </View>
        ),
      }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="Sign in"
        component={SigninScreen}
      />

      <Stack.Screen name="RegisterNavigator" component={SignupNavigator} />
    </Stack.Navigator>
  );
};
