import {CLIENT_NAME} from '@env';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getClientConfig} from '../clients';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [config, setConfig] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const clientConfig = getClientConfig(CLIENT_NAME);
    if (clientConfig) {
      setConfig(clientConfig);
    } else {
      setError(`No config found for client: ${CLIENT_NAME}`);
    }
    setLoading(false);
  }, []);

  const {theme, feature_flags} = config;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        {/* <Tab.Screen name="Home" component={HomeModule} /> */}
        <View>Authorized App</View>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
