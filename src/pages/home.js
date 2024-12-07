import React from 'react';
import { foods as products } from '../food';
import ProductCart from '../components/productCart';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">本日のメニュー</h1>
      <div className="product-grid">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
