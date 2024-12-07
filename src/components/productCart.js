import React from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import './css/ProductCart.css'

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const { id, name, price, image, slug } = props.data;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    return (
        <div className="product-card">
            <Link to={slug}>
                <img src={image} alt="" className="product-card-image" />
            </Link>
            <h3 className="product-card-title">{name}</h3>
            <div className="product-card-footer">
                <p className="product-card-price">
                    ¥<span className="product-card-price-amount">{price}</span>
                </p>
                <button className="product-card-button" onClick={handleAddToCart}>
                    <img src={iconCart} alt="" className="product-card-button-icon" />
                    カートに追加
                </button>
            </div>
        </div>
    );
};

export default ProductCart;
