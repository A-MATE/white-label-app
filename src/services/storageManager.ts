import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageManager {
  static async setToken(payload: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem('token', payload);
      return true;
    } catch (error) {
      console.log('Error on setToken:', error);
      return false;
    }
  }

  static async setUserId(payload: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem('userId', payload);
      return true;
    } catch (error) {
      console.log('Error on setUserId:', error);
      return false;
    }
  }

  static async checkToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.log('Error while checking token:', error);
      return null;
    }
  }

  static async checkUserId(): Promise<string | null> {
    try {
      const id = await AsyncStorage.getItem('userId');
      return id;
    } catch (error) {
      console.log('Error while checking userId:', error);
      return null;
    }
  }

  static async removeToken(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem('token');
      return true;
    } catch (error) {
      console.log('Error on removeToken:', error);
      return false;
    }
  }

  static async removeUserId(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem('userId');
      return true;
    } catch (error) {
      console.log('Error on removeUserId:', error);
      return false;
    }
  }
}

export default StorageManager;
