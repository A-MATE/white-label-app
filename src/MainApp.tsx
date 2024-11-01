import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {FC} from 'react';

import ClubScreen from './features/club/ClubScreen';
import HomeScreen from './features/home/HomeScreen';
import MatchesScreen from './features/matches/MatchesScreen';
import MediaScreen from './features/media/MediaScreen';

const Tab = createBottomTabNavigator();

type MainAppProps = {
  theme: Theme;
};
const MainApp: FC<MainAppProps> = ({theme}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          sceneContainerStyle: {
            backgroundColor: '#3b3b3b',
          },
          headerShown: false,
        })}>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="matches" component={MatchesScreen} />
        <Tab.Screen name="club" component={ClubScreen} />
        <Tab.Screen name="media" component={MediaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
