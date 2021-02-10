import React from 'react';
import { Radio } from 'antd';
import Tick from '../../components/icons/tick';
import { useProductsContext } from './Provider';
const sorting = [
  {
    text: 'Price low to high',
    type: 'price',
    towards: 'low',
  },
  {
    text: 'Price high to low',
    type: 'price',
    towards: 'high',
  },
  {
    text: 'New to old',
    type: 'added',
    towards: 'high',
  },
  {
    text: 'Old to new',
    type: 'added',
    towards: 'low',
  },
];

const Sorting = () => {
  const { dispatchProducts, productsState } = useProductsContext();

  const onChange = (e) => {
    const obj = e.target.value.split('-');
    if (obj.length < 2) return;
    dispatchProducts({
      type: 'onSortingChange',
      payload: {
        [obj[0]]: obj[1],
      },
    });
  };

  return (
    <div className='side-bar-container'>
      <div className='card'>
        <Radio.Group className='sort-cover' onChange={onChange} defaultValue={'price-low'}>
          {sorting.map((element, index) => (
            <Radio key={element.type + index} value={`${element.type + '-' + element.towards}`}>
              <div className='radio-cover'>
                <div className='radio-box-custom'>
                  <Tick color={'#1EA4CE'}></Tick>
                </div>

                {element.text}
              </div>
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default Sorting;
