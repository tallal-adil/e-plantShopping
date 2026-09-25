import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping, onHomeClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const handleIncrease = item => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const handleDecrease = item => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  // Remove item completely
  const handleRemove = itemId => {
    dispatch(removeItem(itemId));
  };

  // Checkout
  const handleCheckout = () => {
    alert('Checkout is Coming Soon!');
  };

  // Total number of products
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="cart-navbar">

        <div className="cart-navbar-brand">
          Paradise Nursery
        </div>

        <div className="cart-navbar-links">

          <button onClick={onHomeClick}>
            Home
          </button>

          <button onClick={onContinueShopping}>
            Plants
          </button>

          <button className="active-cart">
            🛒 Cart ({totalItems})
          </button>

        </div>

      </nav>

      {/* Cart Heading */}
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>

        <p>
          {totalItems === 0
            ? 'Your cart is currently empty.'
            : `${totalItems} ${
                totalItems === 1 ? 'item' : 'items'
              } in your cart`}
        </p>
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>Your Cart is Empty</h2>

          <p>
            Add some beautiful plants to your cart
            and they will appear here.
          </p>

          <button
            className="continue-shopping-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>

        </div>

      ) : (

        <div className="cart-content">

          {/* Cart Items */}
          <div className="cart-items">

            {cartItems.map(item => {

              const itemTotal =
                item.price * item.quantity;

              return (
                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* Plant Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Plant Information */}
                  <div className="cart-item-details">

                    <h2>{item.name}</h2>

                    <p className="cart-item-price">
                      Unit Price: $
                      {item.price.toFixed(2)}
                    </p>

                    <p className="cart-item-total">
                      Item Total: $
                      {itemTotal.toFixed(2)}
                    </p>

                  </div>

                  {/* Quantity Controls */}
                  <div className="quantity-section">

                    <p>Quantity</p>

                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          handleDecrease(item)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleIncrease(item)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Remove Button */}
                  <button
                    className="remove-item-button"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>
              );
            })}

          </div>

          {/* Cart Summary */}
          <aside className="cart-summary-box">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row total-row">
              <span>Total Amount</span>
              <strong>
                ${totalAmount.toFixed(2)}
              </strong>
            </div>

            {/* Checkout */}
            <button
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            {/* Continue Shopping */}
            <button
              className="continue-shopping-button"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>

          </aside>

        </div>

      )}

    </div>
  );
}

export default CartItem;