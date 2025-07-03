import React from 'react';
import {View} from 'react-native';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './HeaderMatchCard.style';

type Props = {};
export const HeaderMatchCard = ({}: Props) => {
  const styles = useStyle(styleSheet);

  return <View style={styles.container} />;
};
