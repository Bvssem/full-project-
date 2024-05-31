import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import checkoutReducer from './reducers/checkoutReducer';
import courseReducer from './reducers/courseReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = {
  cart: cartReducer,
  course: courseReducer,
  order: orderReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
