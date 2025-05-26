import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseRequest} from 'src/services/api';
import StorageManager from 'src/services/storageManager';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      console.log('ALORS ??? ');

      const response = await baseRequest('/api/v1/auth/signin', 'POST', {
        email,
        password,
      });

      console.log('Response', response.data);

      const accessToken = response.data.access_token;

      await StorageManager.setToken(accessToken);

      return response.data;
    } catch (error) {
      console.log('Error:', error);

      return rejectWithValue(error || 'Login failed');
    }
  },
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const token = await StorageManager.checkToken();
  if (token) {
    return true;
  }
  return false;
});
