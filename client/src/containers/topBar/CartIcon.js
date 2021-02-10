import React from 'react';
import { toggleCartHidden } from '../../redux/actions/basket.action';
import { selectCartTotal } from '../../redux/selectors/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/images/cart.svg';

import './cartIcon.scss';
const Cart = ({ toggleCartHidden, count, cartTotal }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />

      <div className='total-header'>
        <span>₺ </span>
        {cartTotal}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
