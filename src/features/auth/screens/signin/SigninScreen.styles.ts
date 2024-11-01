import {StyleSheet} from 'react-native';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  });

export default styleSheet;
