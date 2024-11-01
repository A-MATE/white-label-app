import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ClubScreenProps = {};
const ClubScreen: React.FC<ClubScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Club Screen</Text>
    </SafeAreaView>
  );
};

export default ClubScreen;
