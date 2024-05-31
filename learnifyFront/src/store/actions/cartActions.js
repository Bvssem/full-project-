import axios from 'axios';
import React, { useState } from 'react';


export const addToCart = (courseId, userId, quantity) => async dispatch => {
  try {
    await axios.post(`/api/cart/add?courseId=${courseId}&userId=${userId}&quantity=${quantity}`);
    dispatch(fetchCartItems());
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const fetchCartItems = () => async dispatch => {
  const userId = localStorage.getItem("id");
  try {
    const res = await axios.get(`/api/cart/items/${userId}`);
    dispatch({ type: 'FETCH_CART_ITEMS_SUCCESS', payload: res.data });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    dispatch({ type: 'FETCH_CART_ITEMS_FAILURE', payload: error.message });
  }
};
