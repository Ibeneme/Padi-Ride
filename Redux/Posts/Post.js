import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  posts: [],
  post: null,
  status: "idle",
  error: null,
  accessToken: null,
  loading: false,
  isLoadingPosts: false
};

export const fetchAccessToken = createAsyncThunk(
  "post/fetchAccessToken",
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("access_token");
      console.log(token, "token");
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Failed to retrieve the access token from AsyncStorage"
      );
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (postData, thunkAPI) => {
    const token = await AsyncStorage.getItem("access_token");

    try {
      console.log(postData, 'postData')
      const response = await axios.post(
        "https://padi-ride.onrender.com/rideapi/post/create/",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Create Post Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Create Post Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, thunkAPI) => {
    const token = await AsyncStorage.getItem("access_token");

    try {
      const response = await axios.delete(
        `https://padi-ride.onrender.com/rideapi/post/delete/${postId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Delete Post Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Delete Post Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllPosts",
  async (_, thunkAPI) => {
    try {
      console.log(token, " response.data");
      const token = await AsyncStorage.getItem("access_token");

      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/post/list-all-post/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Fetch All Posts Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Fetch All Posts Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchSinglePost = createAsyncThunk(
//   "post/fetchSinglePost",
//   async (postId, thunkAPI) => {
//     try {
//       const token = await AsyncStorage.getItem("access_token");
//       const response = await axios.get(
//         `https://padi-ride.onrender.com/rideapi/post/retrieve-single-post/${postId}/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Fetch Single Post Response:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Fetch Single Post Error:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchUserPosts = createAsyncThunk(
  "post/fetchUserPosts",
  async (_, thunkAPI) => {
    const token = await AsyncStorage.getItem("access_token");

    // const state = thunkAPI.getState();
    // const token = state.post.accessToken;
    try {
      const response = await axios.get(
        "https://padi-ride.onrender.com/rideapi/post/single-user-post/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Fetch User Posts Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Fetch User Posts Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAccessToken.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      state.loading = true;
    })
    .addCase(fetchAccessToken.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.accessToken = action.payload;
      state.loading = false;
    })
    .addCase(fetchAccessToken.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(createPost.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      state.loading = true;
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
      state.loading = false;
    })
    .addCase(createPost.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(deletePost.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      state.loading = true;
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      state.loading = false;
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(fetchAllPosts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      state.isLoadingPosts = true;
    })
    .addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
      state.isLoadingPosts = false;
    })
    .addCase(fetchAllPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.isLoadingPosts = false;
    })
    // .addCase(fetchSinglePost.pending, (state) => {
    //   state.status = 'loading';
    //   state.error = null;
    //   state.loading = true;
    // })
    // .addCase(fetchSinglePost.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.post = action.payload;
    //   state.loading = false;
    // })
    // .addCase(fetchSinglePost.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.payload;
    //   state.loading = false;
    // })
    .addCase(fetchUserPosts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      state.loading = true;
    })
    .addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
      state.loading = false;
    })
    .addCase(fetchUserPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
