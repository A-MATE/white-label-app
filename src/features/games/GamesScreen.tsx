import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type GamesScreenProps = {};
const GamesScreen: React.FC<GamesScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Games Screen</Text>
    </SafeAreaView>
  );
};

export default GamesScreen;