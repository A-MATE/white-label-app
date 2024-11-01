import {StyleSheet} from 'react-native';
import {Spacing} from 'src/commons/styles/spacing.enum';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: Spacing.xxxl,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    width: 110,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
