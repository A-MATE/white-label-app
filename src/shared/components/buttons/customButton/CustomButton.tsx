import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './CustomButton.styles';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  variant: 'default' | 'outlined' | 'ghost';
};

const CustomButton: FC<CustomButtonProps> = ({onPress, title, variant}) => {
  const styles = useStyle(styleSheet);

  const containerStyle = [styles.container, styles[`${variant}Container`]];

  const titleStyle = styles[`${variant}Title`];

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <View>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
