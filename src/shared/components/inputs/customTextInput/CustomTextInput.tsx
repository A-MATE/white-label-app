import React, {FC} from 'react';
import {InputModeOptions, TextInput, View} from 'react-native';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './CustomTextInput.styles';

type CustomInputProps = {
  placeholder?: string;
  inputMode?: InputModeOptions;
  onChangeText: (event: string | number) => void;
  value: string;
  secureTextEntry?: boolean;
};

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  inputMode = 'text',
  onChangeText,
  value,
  secureTextEntry = false,
}) => {
  const styles = useStyle(styleSheet);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        inputMode={inputMode}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
      />
    </View>
  );
};

export default CustomInput;
