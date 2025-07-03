import React from 'react';
import HeaderCarousel from '../components/HeaderCarousel/HeaderCarousel';
import HomeCarousels from '../components/HomeCarousels/HomeCarousels';
import {ScrollView} from 'react-native';

type HomeScreenProps = {};
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <ScrollView>
      <HeaderCarousel />
      <HomeCarousels />
    </ScrollView>
  );
};

export default HomeScreen;
