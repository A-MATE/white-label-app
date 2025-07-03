import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styleSheet = (_theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: height * 0.4,
      position: 'relative',
    },
    
  });

export default styleSheet;
