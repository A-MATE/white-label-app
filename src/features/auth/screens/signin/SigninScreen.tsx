import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import useStyle from 'src/commons/hooks/useStyle';
import {RequestStatus} from 'src/commons/types/requestStatus.enum';

import CustomButton from 'src/commons/components/buttons/customButton/CustomButton';
import CustomInput from 'src/commons/components/inputs/customTextInput/CustomTextInput';
import useAppDispatch from 'src/commons/hooks/useAppDispatch';
import useAppSelector from 'src/commons/hooks/useAppSelector';
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

        <CustomButton title="Sign In" onPress={handleOnClick} />

        {/* Display loading indicator or error message */}
        {status === RequestStatus.LOADING && <Text>Loading...</Text>}
        {status === RequestStatus.FAILED && <Text>{error}</Text>}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SigninScreen;
