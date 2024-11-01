import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Text, View} from 'react-native';
import CustomInput from 'src/shared/components/inputs/customTextInput/CustomTextInput';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './PasswordStep.styles';

const PasswordStep: React.FC = () => {
  const styles = useStyle(styleSheet);
  const {control} = useFormContext();

  return (
    <View style={styles.container}>
      <Text>Enter your password</Text>
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <CustomInput
            variant="text"
            secureTextEntry
            placeholder="Password"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {onChange, value}}) => (
          <CustomInput
            variant="text"
            placeholder="Verify Password"
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
    </View>
  );
};

export default PasswordStep;
