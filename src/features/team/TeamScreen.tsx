import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ClubScreenProps = {};
const ClubScreen: React.FC<ClubScreenProps> = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('feature.team')}</Text>
    </SafeAreaView>
  );
};

export default ClubScreen;
