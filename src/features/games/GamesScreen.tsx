import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type GamesScreenProps = {};
const GamesScreen: React.FC<GamesScreenProps> = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('feature.games')}</Text>
    </SafeAreaView>
  );
};

export default GamesScreen;