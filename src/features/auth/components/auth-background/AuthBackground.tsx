import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './AuthBackground.styles';

type AuthBackgroundProps = {children: React.ReactNode};

const AuthBackground: React.FC<AuthBackgroundProps> = ({children}) => {
  const styles = useStyle(styleSheet);
  const {colors} = useTheme();

  const base = colors.background.replace('#', '');

  const gradientColors = [
    `#${base}FF`, // 100%
    `#${base}F2`, // 95%
    `#${base}CC`, // 80%
    `#${base}80`, // 50%
    `#${base}4D`, // 30%
    `#${base}00`, // 0%
  ];

  return (
    <ImageBackground
      source={require('../../../../assets/images/auth-bg.png')}
      style={styles.imageBackground}
      resizeMode="cover">
      <LinearGradient
        colors={gradientColors}
        start={{x: 0.3, y: 0.1}}
        end={{x: 0.2, y: 0.5}}
        style={styles.gradient}
      />
      <LinearGradient
        colors={gradientColors}
        start={{x: 0.2, y: 0.9}}
        end={{x: 0.3, y: 0.5}}
        style={styles.gradient}
      />
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

export default AuthBackground;
