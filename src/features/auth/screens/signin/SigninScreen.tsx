import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import useStyle from 'src/shared/hooks/useStyle';
import {RequestStatus} from 'src/shared/types/request-status.enum';

import CustomButton from 'src/shared/components/buttons/customButton/CustomButton';
import CustomInput from 'src/shared/components/inputs/customTextInput/CustomTextInput';
import useAppDispatch from 'src/shared/hooks/useAppDispatch';
import useAppSelector from 'src/shared/hooks/useAppSelector';
import {loginUser} from '../../services/authThunks';
import styleSheet from './SigninScreen.styles';

import {API_URL, CLIENT_ID, ENVIRONMENT} from '@env';

console.log('API_URL:', API_URL);
console.log('CLIENT_ID:', CLIENT_ID);
console.log('ENVIRONMENT:', ENVIRONMENT);

const SigninScreen = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const {status, error} = useAppSelector(state => state.auth);

  const handleEmailChange = (event: string) => {
    setEmail(event.toLowerCase());
  };

  const handlePasswordChange = (event: string) => {
    setPassword(event);
  };

  const handleOnClick = () => {
    if (email && password) {
      dispatch(loginUser({email, password}));
    }
  };

  const styles = useStyle(styleSheet);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <CustomInput
          placeholder="Email "
          onChangeText={handleEmailChange}
          value={email}
        />
        <CustomInput
          placeholder="Password"
          onChangeText={handlePasswordChange}
          secureTextEntry
          value={password}
        />

        <View style={styles.footer}>
          <CustomButton
            variant="default"
            title="Sign In"
            onPress={handleOnClick}
          />

          {status === RequestStatus.LOADING && <Text>Loading...</Text>}
          {status === RequestStatus.FAILED && <Text>{error}</Text>}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SigninScreen;
