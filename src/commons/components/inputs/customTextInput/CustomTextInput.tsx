import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import {Spacing} from 'src/commons/styles/spacing.enum';

enum InputVariant {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  NUMBER = 'number',
  PHONE = 'phone',
}

type CustomInputProps = {
  placeholder?: string;
  variant?: InputVariant;
  onChangeText: (event: string | number) => void;
};

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  variant,
  onChangeText,
}) => {
  const inputMode = {
    [InputVariant.EMAIL]: 'email',
    [InputVariant.PASSWORD]: 'default',
    [InputVariant.TEXT]: 'default',
    [InputVariant.NUMBER]: 'numeric',
    [InputVariant.PHONE]: 'tel',
  };

  return (
    <View
      style={{
        width: 300,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        padding: 10,
        margin: Spacing.md,
      }}>
      <TextInput
        inputMode="text"
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;
