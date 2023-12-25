// src/App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 'rec1JZlfCIBOPdcT2',
      title: 'Samsung Galaxy S8',
      price: '399.99',
      image: 'https://www.course-api.com/images/cart/phone-1.png',
    },
    {
      id: 'recB6qcHPxb62YJ75',
      title: 'google pixel',
      price: '499.99',
      image: 'https://www.course-api.com/images/cart/phone-2.png',
    },
    {

      id:'recdRxBsE14Rr2VuJ',
      title:'Xiaomi Redmi Note 2',
      price:'699.99',
      image:'https://www.course-api.com/images/cart/phone-3.png',
    },
    {

      id:'recwTo160XST3PIoW',
      title:'Samsung Galaxy S7',
      price:'599.99',
      image:'https://www.course-api.com/images/cart/phone-4.png',
    },
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <h1>E-commerce Cart</h1>
        <div className="cart-icon">
          <span>{cart.length}</span>
        </div>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart-container">
          <div className="cart">
            <h2>Your Cart</h2>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-buttons">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            {cart.length > 0 && (
              <div className="cart-summary">
                <hr />
                <h3>Total: ${getTotal().toFixed(2)}</h3>
                <button onClick={clearCart}>Clear Cart</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
