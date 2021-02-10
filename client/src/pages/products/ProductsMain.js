import React from 'react';

import MainContent from '../../containers/innerPage/MainContent';
import Products from './Products';
import SideFilter from './SideFilter';
import Flex from '../../components/container/flex/Flex';
import { useProductsContext } from './Provider';
import style from './main.module.scss';

const ProductsPage = () => {
  const { currentCategory, categories, setCurrentCategory } = useProductsContext();

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <MainContent>
      <Flex col={3} colL={3} colM={4} colS={12}>
        <SideFilter></SideFilter>
      </Flex>

      <Flex col={6} colL={6} colM={8} colS={12}>
        <div className='title'>Products</div>
        <div
          style={{
            display: 'inline-flex',
          }}
        >
          {categories &&
            categories.map((category) => {
              return (
                <div
                  style={{
                    padding: '10px',
                    backgroundColor: '#F2F0FD',
                    color: '#1EA4CE',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleCategoryChange(category)}
                  key={`${category}-button`}
                >
                  {category}
                </div>
              );
            })}
        </div>
        <Products category={currentCategory}></Products>
      </Flex>

      <Flex col={3}>
        <div></div>
      </Flex>
    </MainContent>
  );
};

export default ProductsPage;
