import {StyleSheet} from 'react-native';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      // borderColor: 'red',
      // borderWidth: 1,
    },
  });

export default styleSheet;
