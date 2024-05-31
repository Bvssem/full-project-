import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

const Course = ({ course, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [userIdd, setUserId] = useState(localStorage.getItem("id"));


  const handleAddToCart = () => {
    const userId = userIdd; // Replace with actual user ID
    addToCart(course.id, userId, quantity);
  };

  const handleQuantityChange = e => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <p>{course.description}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: (courseId, userId, quantity) =>
    dispatch(addToCart(courseId, userId, quantity)),
});

export default connect(null, mapDispatchToProps)(Course);
