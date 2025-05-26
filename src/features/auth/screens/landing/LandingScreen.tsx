import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import CustomButton from 'src/shared/components/buttons/customButton/CustomButton';
import AuthBackground from '../../components/auth-background/AuthBackground';
import styles from './LandingScreen.styles';

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
        <View style={styles.logoContainer}>
          <Image
            style={styles.teamLogo}
            source={require('../../../../assets/images/team-logo.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.actionContainer}>
          <CustomButton
            variant="outlined"
            onPress={handleOnPressRegister}
            title="Signup"
          />
          <CustomButton
            variant="default"
            onPress={handleOnPressLogin}
            title="Signin"
          />
        </View>
      </View>
    </AuthBackground>
  );
};

export default LandingView;
