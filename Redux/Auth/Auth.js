import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/register/",
        userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response, "Registration Response");
      return response.data;
    } catch (error) {
      console.log(error, "Registration Error");
      return thunkAPI.rejectWithValue(error?.response);
    }
  }
);

export const resendOTP = createAsyncThunk(
  "registration/resendOTP",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/resend-otp/",
        userData
      );
      console.log(response, "Resend OTP Response");
      return response.data;
    } catch (error) {
      console.error(error, "Resend OTP Error");
      throw error;
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "registration/forgotPassword",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/forgot-password/",
        userData
      );
      console.log(response, "Forgot Password Response");
      return response.data;
    } catch (error) {
      console.error(error, "Forgot Password Error");
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "registration/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/login/",
        userData
      );

      const access = response?.data?.tokens.access;
      const refresh = response?.data?.tokens.refresh;

      // Save the tokens to AsyncStorage
      await AsyncStorage.setItem("access_token", access);
      await AsyncStorage.setItem("refresh_token", refresh);
      const logg = await AsyncStorage.getItem("access_token");
      console.log(logg, "logg");

      console.log(response?.data?.tokens, refresh, access, "Login Responses");

      return response.data;
    } catch (error) {
      console.error(error, "Login Error");
      throw error;
    }
  }
);

export const refreshToken = createAsyncThunk(
  "registration/refreshToken",
  async (refreshToken) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/token-refresh/",
        { refreshToken }
      );
      console.log(response, "Token Refresh Response");
      return response.data;
    } catch (error) {
      console.error(error, "Token Refresh Error");
      throw error;
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "registration/verifyOTP",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/verify-otp/",
        { otp: userData }
      );
      console.log(response, "OTP Verification Response");
      return response.data;
    } catch (error) {
      console.log(error, "Registration Error");
      return thunkAPI.rejectWithValue(error?.response);
    }
  }
);

export const verifyOTPPassword = createAsyncThunk(
  "registration/verifyOTPPassword",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/password-verify-otp/",
        { otp: userData }
      );
      console.log(response, "OTP Verification Response");
      return response.data;
    } catch (error) {
      console.log(error, "Registration Error");
      return thunkAPI.rejectWithValue(error?.response);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "registration/verifyToken",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/verify-token/",
        userData
      );
      console.log(response, "Token Verification Response");
      return response.data;
    } catch (error) {
      console.error(error, "Token Verification Error");
      throw error;
    }
  }
);

export const passwordReset = createAsyncThunk(
  "registration/passwordReset",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/account/password-reset/",
        userData
      );
      console.log(response, "Password Reset Response");
      return response.data;
    } catch (error) {
      console.error(error, "Password Reset Error");
      throw error;
    }
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(resendOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendOTP.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(refreshToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(verifyToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(verifyOTPPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOTPPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(verifyOTPPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(passwordReset.pending, (state) => {
        state.loading = true;
      })
      .addCase(passwordReset.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(passwordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registrationSlice.reducer;
