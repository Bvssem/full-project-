import React, { useState } from 'react';
import { connect } from 'react-redux';
import { placeOrder } from '../store/actions/orderActions';
import './OrderForm.css'; // Import CSS file for styling
import { toast } from 'react-toastify';


const OrderForm = ({ cartItems, placeOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    address: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    placeOrder(formData);
    toast.success("order placed sucessfully")
  };

  return (
    <div className="order-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add similar fields for lastName, emailAddress, phoneNumber, companyName */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add similar fields for city, state, zipCode */}
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add other payment methods as options */}
          </select>
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  placeOrder: orderData => dispatch(placeOrder(orderData))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
