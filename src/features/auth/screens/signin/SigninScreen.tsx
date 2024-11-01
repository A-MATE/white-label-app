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
import {RequestStatus} from 'src/shared/types/requestStatus.enum';

import CustomButton from 'src/shared/components/buttons/customButton/CustomButton';
import CustomInput from 'src/shared/components/inputs/customTextInput/CustomTextInput';
import useAppDispatch from 'src/shared/hooks/useAppDispatch';
import useAppSelector from 'src/shared/hooks/useAppSelector';
import {loginUser} from '../../services/authThunks';
import styleSheet from './SigninScreen.styles';

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
          name="email"
          placeholder="Email"
          onChangeText={handleEmailChange}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          onChangeText={handlePasswordChange}
          secureTextEntry
        />

        <View style={styles.footer}>
          <CustomButton title="Sign In" onPress={handleOnClick} />

          {status === RequestStatus.LOADING && <Text>Loading...</Text>}
          {status === RequestStatus.FAILED && <Text>{error}</Text>}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SigninScreen;
