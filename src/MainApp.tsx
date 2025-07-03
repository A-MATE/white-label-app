import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, Theme} from '@react-navigation/native';
import React from 'react';

import ClubScreen from './features/club/ClubScreen';
import HomeScreen from './features/home/screens/HomeScreen';
import MatchesScreen from './features/matches/MatchesScreen';
import MediaScreen from './features/media/MediaScreen';
import MomentsScreen from './features/moments/screens/MomentsScreen';

const Tab = createBottomTabNavigator();

type MainAppProps = {
  theme: Theme;
};
const MainApp = ({theme}: MainAppProps) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Games" component={MatchesScreen} />
        <Tab.Screen name="Moments" component={MomentsScreen} />
        <Tab.Screen name="Team" component={ClubScreen} />
        <Tab.Screen name="News" component={MediaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
