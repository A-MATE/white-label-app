import {StyleSheet} from 'react-native';
import {Spacing} from 'src/shared/styles/spacing.enum';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Spacing.xxxl,
  },
  teamLogo: {
    height: 180,
    aspectRatio: 1,
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
    height: 40,
    width: 115,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  registerButtonText: {
    color: 'white',
  },
});

export default styles;
