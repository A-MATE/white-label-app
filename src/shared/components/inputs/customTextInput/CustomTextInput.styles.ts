import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Spacing} from 'src/shared/styles/spacing.enum';

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: 230,
      height: 50,
      borderRadius: 10,
      // borderWidth: 2,
      // borderColor: theme.colors.border,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      justifyContent: 'center',
      padding: 10,
      margin: Spacing.md,
    },
    input: {
      color: 'white',
    },
  });

export default styleSheet;
