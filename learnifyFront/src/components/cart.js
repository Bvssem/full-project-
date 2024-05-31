import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems } from '../store/actions/cartActions';
import './Cart.css'; // Import CSS file for styling

const Cart = ({ cartItems, fetchCartItems }) => {
  const [userIdd, setUserId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    console.log(cartItems)
    if (userIdd) {
      fetchCartItems();
    }
  }, [fetchCartItems]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <p className="quantity">Quantity: {item.quantity}</p>
          <p className="price">Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
