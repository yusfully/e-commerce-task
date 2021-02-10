import React from 'react';
import { selectCartTotal } from '../../redux/selectors/cart.selectors';
import CartItemListItem from './CartItemComponent';
import Button from '../../components/button/Button';
import { createStructuredSelector } from 'reselect';
import Scrollbar from '../../components/scrollbar/scrollBar';
import { connect } from 'react-redux';
import './cartDropdown.scss';

const CartDropDown = ({ items, cartTotal }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <div className='flex-block'>
          <div className='item-list'>
            <Scrollbar height={'100%'}>
              {items.length ? (
                <div className='basket-list'>
                  {items.map((item) => (
                    <CartItemListItem key={item.added} item={item} />
                  ))}
                </div>
              ) : (
                <div className='emptybasket'>Your Basket is empty</div>
              )}
            </Scrollbar>
          </div>
          <div className='basket-total-pay'>
            <Button className='button big invevrted'>
              {' '}
              <span>
                <span>₺</span>
                {cartTotal}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, null)(CartDropDown);
