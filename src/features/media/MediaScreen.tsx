import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type MediaScreenProps = {};
const MediaScreen: React.FC<MediaScreenProps> = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('feature.social')}</Text>
    </SafeAreaView>
  );
};

export default MediaScreen;
