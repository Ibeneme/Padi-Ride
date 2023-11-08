
import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './Auth/Auth';
import userReducer from './Users/User'
import postReducer from './Posts/Post'
import deliveryReducer from './Deliveries/Deliveries'

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    user: userReducer,
    post: postReducer,
    delivery: deliveryReducer,

  },
});

export default store;
