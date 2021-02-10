import React from 'react';
import Flex from '../../components/container/flex/Flex';
import styles from './product.module.scss';
import { connect } from 'react-redux';
import Image from '../../assets/images/mug.jpg';
import { addItemCart } from '../../redux/actions/basket.action';
import style from './product.module.scss';

const Product = ({ imageUrl, name, price, added, addItemCart }) => {
  return (
    <Flex col={3} colM={6} colS={12} space={3}>
      <div className={styles.item}>
        <div className={style.itemPicture}>
          <img className={style.itemImage} src={Image}></img>
        </div>
        <span className={style.price}>
          <span className={style.currency}>₺ </span> {price}
        </span>
        <span className={style.name}>{name}</span>

        <button className={style.buttonAddBasket} onClick={() => addItemCart({ imageUrl, name, price, added })}>
          Add
        </button>
      </div>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemCart: (id) => dispatch(addItemCart(id)),
});

export default connect(null, mapDispatchToProps)(Product);
