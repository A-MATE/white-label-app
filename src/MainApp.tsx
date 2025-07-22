import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native';
import {logoutUser} from './features/auth/services/authThunks';
import GamesScreen from './features/games/GamesScreen';
import HomeScreen from './features/home/screens/HomeScreen';
import MediaScreen from './features/media/MediaScreen';
import ClubScreen from './features/team/TeamScreen';
import useAppDispatch from './shared/hooks/useAppDispatch';
import useFeatureFlag from './shared/hooks/useFeatureFlag';

const Tab = createBottomTabNavigator();

type MainAppProps = {
  theme: Theme;
};
const MainApp: FC<MainAppProps> = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {isEnabled: isHomeEnabled} = useFeatureFlag('home');
  const {isEnabled: isGamesEnabled} = useFeatureFlag('games');
  const {isEnabled: isMomentsEnabled} = useFeatureFlag('moments');
  const {isEnabled: isClubEnabled} = useFeatureFlag('club');
  const {isEnabled: isMediaEnabled} = useFeatureFlag('media');

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          sceneContainerStyle: {
            backgroundColor: '#3b3b3b',
          },
          headerRight: () => <Button onPress={handleLogout} title={t('auth.logout')} />,
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
