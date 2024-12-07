import React, { useState, useEffect } from 'react';
import { foods as products } from '../food';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import './css/Cart-item.css';

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.id === productId); // filterをfindに変更
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1
    }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }));
  };

  if (!detail) {
    return <div>商品情報を読み込み中...</div>;
  }

  return (
    <div className="cart-item">
      <img 
        src={detail.image} 
        alt={detail.name} 
      />
      <h3>{detail.name}</h3>
      <p>￥{detail.price * quantity}</p>
      <div className="quantity-controls">
        <button 
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button 
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
