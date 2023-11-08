import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  deliveries: [],
  parcelSenders: [],
  messaging: [],
  userDeliveryHistory: [],
  userSendParcelHistory: [],
  status: "idle",
  error: null,
};

const getAccessTokenFromAsyncStorage = async () => {
  try {
    const token = await AsyncStorage.getItem("access-token");
    if (token) {
      return token;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const fetchDeliveries = createAsyncThunk(
  "delivery/fetchDeliveries",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage();
      if (!accessToken) {
        return rejectWithValue("Access token not available");
      }

      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/delivery/list-all-delivery/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchParcelSenders = createAsyncThunk(
  "delivery/fetchParcelSenders",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage();
      if (!accessToken) {
        return rejectWithValue("Access token not available");
      }

      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/delivery/list-parcel-senders/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMessaging = createAsyncThunk(
  "delivery/fetchMessaging",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage();
      if (!accessToken) {
        return rejectWithValue("Access token not available");
      }

      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/delivery/messaging/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserDeliveryHistory = createAsyncThunk(
  "delivery/fetchUserDeliveryHistory",
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem("access_token");

      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/delivery/user-delivery-history/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserSendParcelHistory = createAsyncThunk(
  "delivery/fetchUserSendParcelHistory",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage();
      if (!accessToken) {
        return rejectWithValue("Access token not available");
      }

      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/delivery/user-sendparcel-history/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deliverParcel = createAsyncThunk(
  "delivery/deliverParcel",
  async (payload, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem("access_token");
      console.log(payload, "payload");
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/delivery/deliver-parcel/",
        payload, // Replace 'payload' with the data you want to send in the POST request
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeliveries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deliveries = action.payload;
      })
      .addCase(fetchDeliveries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchParcelSenders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchParcelSenders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.parcelSenders = action.payload;
      })
      .addCase(fetchParcelSenders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchMessaging.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessaging.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messaging = action.payload;
      })
      .addCase(fetchMessaging.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserDeliveryHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDeliveryHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDeliveryHistory = action.payload;
      })
      .addCase(fetchUserDeliveryHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserSendParcelHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserSendParcelHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userSendParcelHistory = action.payload;
      })
      .addCase(fetchUserSendParcelHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deliverParcel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deliverParcel.fulfilled, (state, action) => {
        state.status = "succeeded";
        // You can handle the success action here if needed
      })
      .addCase(deliverParcel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default deliverySlice.reducer;
