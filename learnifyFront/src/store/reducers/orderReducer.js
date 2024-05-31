// orderReducer.js
import { PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAILURE } from '../actions/orderActions';

const initialState = {
  order: null,
  loading: false,
  error: null
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        error: null
      };
    case PLACE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default orderReducer;
