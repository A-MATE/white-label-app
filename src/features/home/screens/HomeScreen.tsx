import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderCarousel from '../components/HeaderCarousel/HeaderCarousel';

type HomeScreenProps = {};
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <HeaderCarousel />
    </SafeAreaView>
  );
};

export default HomeScreen;
