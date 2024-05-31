const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CART_ITEMS_SUCCESS':
        return {
          ...state,
          items: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_CART_ITEMS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  