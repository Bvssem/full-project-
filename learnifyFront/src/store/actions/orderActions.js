// orderActions.js
import axios from 'axios';
import { toast } from 'react-toastify';


export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const placeOrderRequest = () => ({
  type: PLACE_ORDER_REQUEST
});

export const placeOrderSuccess = order => ({
  type: PLACE_ORDER_SUCCESS,
  payload: order
});

export const placeOrderFailure = error => ({
  type: PLACE_ORDER_FAILURE,
  payload: error
});

export const placeOrder = (orderData) => async dispatch => {
  const userId = localStorage.getItem("id");

  dispatch(placeOrderRequest());
  try {
    const res = await axios.post(`/api/orders/checkout/${userId}`, orderData);
    dispatch(placeOrderSuccess(res.data));
    toast.success('Item added to cart successfully!');

  } catch (error) {
    dispatch(placeOrderFailure(error.message));
  }
};
