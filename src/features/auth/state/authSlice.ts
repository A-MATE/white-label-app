import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from 'src/commons/types/requestStatus.enum';
import StorageManager from 'src/services/storageManager';

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
  },
  reducers: {
    logOut: state => {
      state.isAuthenticated = false;
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
      });
  },
});

export const {logOut} = authSlice.actions;
export default authSlice.reducer;
