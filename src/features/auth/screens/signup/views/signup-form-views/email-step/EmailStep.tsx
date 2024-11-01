import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Text, View} from 'react-native';
import CustomInput from 'src/shared/components/inputs/customTextInput/CustomTextInput';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './EmailStep.styles';

const EmailStep = () => {
  const styles = useStyle(styleSheet);
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <View style={styles.container}>
      {/* <BlurView
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.222)"
        style={styles.blurCard}> */}
      <Text
        style={{
          color: 'white',
          fontSize: 12,
        }}>
        Enter your email
      </Text>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value}}) => (
          <CustomInput
            placeholder="Email"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && (
        <Text style={{color: 'red'}}>
          {errors.email.message ? String(errors.email.message) : ''}
        </Text>
      )}
      {/* </BlurView> */}
    </View>
  );
};

export default EmailStep;
