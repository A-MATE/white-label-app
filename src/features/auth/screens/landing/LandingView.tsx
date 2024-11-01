import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CustomButton from 'src/commons/components/buttons/customButton/CustomButton';
import AuthBackground from '../../components/auth-background/AuthBackground';
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
    <AuthBackground>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={handleOnPressRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <CustomButton onPress={handleOnPressLogin} title="Login" />
        </View>
      </View>
    </AuthBackground>
  );
};

export default LandingView;
