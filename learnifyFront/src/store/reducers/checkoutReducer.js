const initialState = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      address1: '',
      address2: '',
      country: '',
      city: '',
      state: '',
      zip: '',
      createAccount: false,
      shipToDifferentAddress: false,
      paymentMethod: 'check',
    },
  };
  
  const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FORM_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            [action.payload.name]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };
  
  export default checkoutReducer;
  