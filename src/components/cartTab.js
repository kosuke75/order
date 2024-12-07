import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import CartItem from './cartItem'; 
import { toggleStatusTab } from '../stores/cart';
import './css/CartTab.css'; 

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <div className={`cart-tab ${statusTab === false ? 'cart-tab--closed' : ''}`}>
      <h2 className="cart-tab-header">注文内容</h2>
      <div className="cart-tab-items">
        {carts.map((item, key) => 
          <CartItem key={key} data={item}/>
        )}
      </div>
      <div className="cart-tab-footer">
        <button className="close-button" onClick={handleCloseTabCart}>閉じる</button>
        <button className="checkout-button">注文確定</button>
      </div>
    </div>
  )
}

export default CartTab;
