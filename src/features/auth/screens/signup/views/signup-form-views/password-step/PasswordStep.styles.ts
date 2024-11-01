import {StyleSheet} from 'react-native';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // borderColor: 'red',
      // borderWidth: 1,
    },
  });

export default styleSheet;
