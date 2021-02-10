import React from 'react';
import { connect } from 'react-redux';
import { addItemCart, removeItem } from '../../redux/actions/basket.action';
import './cartItemComponent.scss';

const CartItemListItem = ({ item, removeItem, addItemCart }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className='cart-item'>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'> ₺{price}</span>
      </div>
      <div className='basket-right'>
        <span className='minus' onClick={() => removeItem(item)}></span>
        <span className='basket-quantity'>{quantity}</span>
        <span className='plus' onClick={() => addItemCart(item)}></span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemCart: (id) => dispatch(addItemCart(id)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(CartItemListItem);
