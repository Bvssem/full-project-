import React from 'react';
import OrderForm from './OrderForm';
import Cart from './cart';
import CourseList from './CourseList';
import './Panier.css'; // Import CSS file for styling

const Panier = () => {
  return (
    <div className="container">
      <h1>Learnify System</h1>
      <div className="content">
        <div className="main-content">
          <div className="course-list-container">
            <CourseList />
          </div>
          <div className="cart-container">
            <Cart />
          </div>
        </div>
        <div className="aside">
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default Panier;
