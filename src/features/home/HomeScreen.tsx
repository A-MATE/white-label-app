import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type HomeScreenProps = {};
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
