import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: height * 0.3,
      borderWidth: 1,
      borderColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styleSheet;
