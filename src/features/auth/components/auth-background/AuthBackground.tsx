import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './AuthBackground.styles';

type AuthBackgroundProps = {
  children: React.ReactNode;
};

const AuthBackground: React.FC<AuthBackgroundProps> = ({children}) => {
  const styles = useStyle(styleSheet);
  const {colors} = useTheme();

  return (
    <ImageBackground
      source={require('../../../../assets/images/signup-bg.png')}
      style={styles.imageBackground}
      resizeMode="cover">
      <LinearGradient
        colors={[
          `${colors.background}FF`,
          `${colors.background}CC`,
          'transparent',
          'transparent',
        ]}
        start={{x: 1, y: 0.1}}
        end={{x: 0.5, y: 1}}
        style={styles.gradient}
      />

      <LinearGradient
        colors={[
          `${colors.background}FF`,
          // `${colors.background}CC`,
          `${colors.background}80`,
          'transparent',
          'transparent',
        ]}
        start={{x: 0.1, y: 0.9}}
        end={{x: 0.2, y: 0}}
        style={styles.gradient}
      />
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

export default AuthBackground;
