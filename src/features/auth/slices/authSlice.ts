import {createSlice} from '@reduxjs/toolkit';
import StorageManager from 'src/services/storageManager';
import {RequestStatus} from 'src/shared/types/request-status.enum';
import {checkAuth, loginUser, logoutUser} from '../services/authThunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    status: RequestStatus.IDLE,
    error: null,
    user: null,
    accessToken: null,
  },
  reducers: {},
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
      })

      .addCase(logoutUser.pending, state => {
        state.status = RequestStatus.LOADING;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isAuthenticated = false;
        state.user = null;
        state.accessToken = null;
        state.status = RequestStatus.SUCCEEDED;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = RequestStatus.FAILED;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
