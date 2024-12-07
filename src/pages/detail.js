import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { foods as products } from '../food';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import './Detail.css'; 

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = '/';
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  };

  return (
    <div className="detail-container">
      <h2 className="detail-title">料理について</h2>
      <div className="product-detail">
        <div className="product-image">
          <img src={detail.image} alt={detail.name} />
        </div>
        <div className="product-info">
          <h1 className="product-name">{detail.name}</h1>
          <p className="product-price">￥{detail.price}</p>
          <div className="quantity-controls">
            <button onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePlusQuantity}>+</button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            カートに追加
          </button>
          <p className="product-description">{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

