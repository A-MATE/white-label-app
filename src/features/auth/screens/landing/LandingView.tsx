import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CustomButton from 'src/commons/components/buttons/customButton/CustomButton';
import styles from './LandingView.styles';

const LandingView = () => {
  const navigation = useNavigation();
  const handleOnPressRegister = () => {
    navigation.navigate('signup-stack');
  };
  const handleOnPressLogin = () => {
    navigation.navigate('signin-view');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={handleOnPressRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <CustomButton onPress={handleOnPressLogin} title="Login" />
    </View>
  );
};

export default LandingView;
