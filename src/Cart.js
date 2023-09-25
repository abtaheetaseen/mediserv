import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { decreaseCart, removeFromCart, increaseCart, clearCart, getTotals } from './features/cartSlice';

const Cart = () => {

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCart(cartItem));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart-container">
      <h2 className='cart-heading-h2'>Your trusted drug store</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>You have no stuffs in your cart</p>
          <div className="start-shopping">
            <NavLink to='/store'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>

                  <span>Order Stuffs</span>
            </NavLink>
          </div>
        </div>
      ): (
      <div>
      <div className="titles">
        <h3 className="product-title">
          Product
        </h3>

        <h3 className="prices">
          Price 
        </h3>

        <h3 className="quantity">
          Quantity
        </h3>

        <h3 className="total">
          Total
        </h3>
      </div>

        <div className="cart-items">
          {cart.cartItems?.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <div className="cart-product">
                <img src={cartItem.image} alt={cartItem.name} />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p className='cartItem-category'>*{cartItem.category}</p>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                </div>
              </div>

              <div className="cart-product-price">
              BDT {cartItem.price}
              </div>
              <div className="cart-product-quantity">
                <button className='in-dec-quantity' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                <div className="count">
                  {cartItem.cartQuantity}
                </div>
                <button className='in-dec-quantity' onClick={() => handleIncreaseCart(cartItem)}>+</button>
              </div>
              <div className="cart-product-total-price">
              BDT {cartItem.cartQuantity * cartItem.price}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <button className='clear-cart' onClick={() => handleClearCart()}>Clear Cart</button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">
              BDT {cart.cartTotalAmount}
              </span>
            </div>
            <p>Taxes and shipping will be calculated at checkout</p>
            <button>Check Out</button>

            <div className="continue-shopping">
              <NavLink to='/store'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>

                  <span>Back to Order</span>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
      )}
    </div>
  )
}

export default Cart
