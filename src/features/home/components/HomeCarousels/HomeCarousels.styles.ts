import {StyleSheet} from 'react-native';

const styleSheet = (theme: Record<string, any>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.background,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      color: theme.colors.text,
    },
    carousel: {
      marginBottom: 20,
    },
    carouselItem: {
      width: 200,
      height: 120,
      backgroundColor: theme.colors.card,
      marginRight: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  });

export default styleSheet;
