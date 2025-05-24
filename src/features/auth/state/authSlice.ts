import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import StorageManager from 'src/services/storageManager';
import {RequestStatus} from 'src/shared/types/requestStatus.enum';
import {loginUser} from '../services/authThunks';

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const token = await StorageManager.checkToken();
  if (token) {
    return true;
  } else {
    return false;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    status: RequestStatus.IDLE,
    error: null,
    user: null,
    accessToken: null,
  },
  reducers: {
    logOut: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      StorageManager.removeToken();
    },
  },
  extraReducers: builder => {
    builder

      .addCase(checkAuth.pending, state => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload;
        state.status = RequestStatus.SUCCEEDED;
      })
      .addCase(checkAuth.rejected, state => {
        state.status = RequestStatus.FAILED;
      })

      .addCase(loginUser.pending, state => {
        state.status = RequestStatus.LOADING;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('====================================');
        console.log('Fullfilled:', action.payload);
        console.log('====================================');
        state.isAuthenticated = true;
        state.user = action.payload;
        state.accessToken = action.payload.access_token;
        state.status = RequestStatus.SUCCEEDED;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('====================================');
        console.log('Rejected:', action.payload);
        console.log('====================================');
        state.isAuthenticated = false;
        state.error = action.payload;
        state.status = RequestStatus.FAILED;
      });
  },
});

export const {logOut} = authSlice.actions;
export default authSlice.reducer;
