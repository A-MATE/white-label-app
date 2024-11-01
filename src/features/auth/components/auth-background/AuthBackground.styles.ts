import {StyleSheet} from 'react-native';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    content: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    },
  });

export default styleSheet;
