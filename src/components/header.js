import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import './css/Header.css'; 

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <header className="header">
      <Link to="/" className="logo">戻る</Link>
      <div className="cart-icon" onClick={handleOpenTabCart}>
        <img src={iconCart} alt="Cart Icon" />
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
    </header>
  );
}

export default Header;
