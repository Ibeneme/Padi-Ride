import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Existing createAsyncThunk for fetching user profile
export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
  try {
    const access = await AsyncStorage.getItem('access_token');
    if (!access) {
      throw new Error('Access token not found in AsyncStorage');
    }
    const response = await axios.get('https://padi-ride.onrender.com/rideapi/user_profile/get-user-profile/', {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

// New createAsyncThunk for updating user profile
export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async (updatedProfileData, thunkAPI) => {
  try {
    const access = await AsyncStorage.getItem('access_token');
    if (!access) {
      throw new Error('Access token not found in AsyncStorage');
    }
    const response = await axios.put('https://padi-ride.onrender.com/rideapi/user_profile/update-profile/', updatedProfileData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userProfile: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
