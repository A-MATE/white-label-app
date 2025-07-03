import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type MomentsScreenProps = {};
const MomentsScreen: React.FC<MomentsScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Moments Screen - Short Video Feed Placeholder</Text>
    </SafeAreaView>
  );
};

export default MomentsScreen;
