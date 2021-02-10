import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './CartIcon';
import CartDropDown from './CartDropdown';
import Logo from '../../assets/images/Logo.png';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount, selectCartItems, selectCartHidden } from '../../redux/selectors/cart.selectors';
import style from './header.module.scss';

const Header = ({ hidden, cartItems, itemCount, dispatch }) => {
  return (
    <div className={style.header}>
      <div className='cover'>
        <div className='container header'>
          <div className={style.headerParts}></div>
          <div className={`${style.logo} ${style.headerParts}`}>
            <Link className={style.logoLink} to='/'>
              <img className={style.logoContainer} src={Logo}></img>
            </Link>
          </div>
          <div className={style.headerParts}>
            <div className={`${style.options}`}>
              <Cart count={itemCount} />
            </div>
          </div>

          <div className={hidden ? 'hidden' : 'drop'}>
            <CartDropDown items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
