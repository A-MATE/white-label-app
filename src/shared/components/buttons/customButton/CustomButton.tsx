import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './CustomButton.styles';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
};

const CustomButton: FC<CustomButtonProps> = ({onPress, title}) => {
  const styles = useStyle(styleSheet);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
