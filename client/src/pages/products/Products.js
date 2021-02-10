import React, { useEffect, Fragment, useState } from 'react';
import { productsFetchStart, setActualPage } from '../../redux/actions/products.action';
import { connect } from 'react-redux';
import Product from './Product';
import { Pagination } from 'antd';
import { useProductsContext } from './Provider';
import Arrow from '../../components/icons/arrow';
import style from './product.module.scss';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return (
      <div className={style.paginationNav}>
        <span>
          <Arrow side={'left'}></Arrow>
        </span>
        Prev
      </div>
    );
  }
  if (type === 'next') {
    return (
      <div className={style.paginationNav}>
        Next
        <span>
          <Arrow side={'right'}></Arrow>
        </span>
      </div>
    );
  }
  return originalElement;
}

const Products = ({ productsFetchStart, setActualPage }) => {
  const { showProducts, productsState, dispatchProducts } = useProductsContext();
  const [products, setproducts] = useState();
  const { currentPage } = productsState;

  useEffect(() => {
    productsFetchStart();
  }, []);

  useEffect(() => {
    if (showProducts) {
      setproducts(showProducts.products.slice((currentPage - 1) * 16, currentPage * 16));
    }
  }, [currentPage, showProducts]);

  const handleChange = (num) => {
    dispatchProducts({ type: 'onPageChange', payload: num });
  };
  return (
    <Fragment>
      <div className='card'>
        {products &&
          products.map((element) => {
            return <Product key={`${element.added}`} {...element}></Product>;
          })}
      </div>
      {showProducts && showProducts.products.length > 16 && (
        <Pagination
          itemRender={itemRender}
          className={style.pagination}
          total={showProducts ? Math.floor(showProducts.products.length) : 0}
          current={currentPage || 1}
          siblingCount={0}
          boundaryCount={3}
          hideOnSinglePage
          hideOnSinglePage={false}
          showTotal={false}
          showSizeChanger={false}
          pageSize={16}
          variant='outlined'
          shape='rounded'
          onChange={handleChange}
        />
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  productsFetchStart: (pageNum) => dispatch(productsFetchStart(pageNum)),
  setActualPage: (pageNum) => dispatch(setActualPage(pageNum)),
});

export default connect(null, mapDispatchToProps)(Products);
