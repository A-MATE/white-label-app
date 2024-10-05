import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: 'white',
    height: 50,
    width: 110,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  buttonLogin: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 110,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    margin: 10,
  },
  registerButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
