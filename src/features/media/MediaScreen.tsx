import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type MediaScreenProps = {};
const MediaScreen: React.FC<MediaScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Media Screen</Text>
    </SafeAreaView>
  );
};

export default MediaScreen;
