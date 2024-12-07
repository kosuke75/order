import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';
import './css/Layout.css';

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart?.statusTab);

  return (
    <div className="layout-container">
      <main
        className={`content ${
          statusTabCart ? "content-with-cart-tab" : ""}`}
      >
        <Header />
        <Outlet />
      </main>

      <CartTab />
    </div>
  );
};

export default Layout;
