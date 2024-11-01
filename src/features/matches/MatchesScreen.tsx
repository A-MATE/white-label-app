import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type MatchesScreenProps = {};
const MatchesScreen: React.FC<MatchesScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Matches Screen</Text>
    </SafeAreaView>
  );
};

export default MatchesScreen;
