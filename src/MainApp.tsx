import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';

import ClubScreen from './features/club/ClubScreen';
import HomeScreen from './features/home/screens/HomeScreen';
import GamesScreen from './features/games/GamesScreen';
import MediaScreen from './features/media/MediaScreen';
import useFeatureFlag from './shared/hooks/useFeatureFlag';

const Tab = createBottomTabNavigator();

type MainAppProps = {
  theme: Theme;
};
const MainApp: FC<MainAppProps> = ({theme}) => {
  const {t} = useTranslation();
  const {isEnabled: isHomeEnabled} = useFeatureFlag('home');
  const {isEnabled: isGamesEnabled} = useFeatureFlag('games');
  const {isEnabled: isMomentsEnabled} = useFeatureFlag('moments');
  const {isEnabled: isClubEnabled} = useFeatureFlag('club');
  const {isEnabled: isMediaEnabled} = useFeatureFlag('media');

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          sceneContainerStyle: {
            backgroundColor: '#3b3b3b',
          },
          headerShown: false,
        })}>
        {isHomeEnabled && (
          <Tab.Screen name={t('feature.home')} component={HomeScreen} />
        )}
        {isGamesEnabled && (
          <Tab.Screen name={t('feature.games')} component={GamesScreen} />
        )}
        {isMomentsEnabled && (
          <Tab.Screen name={t('feature.moments')} component={GamesScreen} />
        )}
        {isClubEnabled && (
          <Tab.Screen name={t('feature.team')} component={ClubScreen} />
        )}
        {isMediaEnabled && (
          <Tab.Screen name={t('feature.social')} component={MediaScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;


