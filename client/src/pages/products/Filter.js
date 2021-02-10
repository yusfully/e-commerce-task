import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import { selectProducts } from '../../redux/selectors/product.selector';
import Scrollbar from '../../components/scrollbar/scrollBar';
import Input from '../../components/input/input';
import { useProductsContext } from './Provider';
import Arrow from '../../components/icons/arrow';
import Tick from '../../components/icons/tick';

const Filter = ({ filter, typeFilter }) => {
  const { dispatchProducts, showProducts } = useProductsContext();
  const category = useParams();
  const [checkedList, setCheckedList] = React.useState();
  const [checkAll, setCheckAll] = React.useState(false);
  const onChange = (e) => {
    setCheckAll(showProducts[filter].length === checkedList.length);
    dispatchProducts({
      type: 'onFilterChange',
      payload: {
        filterBy: filter,
        value: e,
      },
    });
  };
  const handleSearchChange = (e) => {
    if (e.target.value.length <= 0) {
      setCheckedList(showProducts[filter]);
      return;
    }

    const filtered = Object.keys(showProducts[filter])
      .filter((element) => {
        return showProducts[filter][element].value.includes(e.target.value);
      })
      .reduce((res, key) => ((res[key] = showProducts[filter][key]), res), {});

    setCheckedList(filtered);
  };

  useEffect(() => {
    if (showProducts && filter) {
      setCheckedList(showProducts[filter]);
    }
  }, [showProducts, filter, category]);

  return (
    <div className='side-bar-container'>
      <div className='card'>
        <div className={'searchBar'}>
          <Input type='input' placeHolder={'Search ' + filter} onChange={(e) => handleSearchChange(e)}></Input>
        </div>
        <Scrollbar height={'214px'}>
          <Checkbox.Group className={'sort-cover'} style={{ width: '100%' }} onChange={onChange}>
            {checkedList &&
              Object.keys(checkedList).map((key) => {
                return (
                  <div
                    key={key}
                    style={{
                      padding: '8px 0',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Checkbox
                      checkedIcon={<Arrow />}
                      className={checkAll ? 'checked' : ''}
                      value={checkedList[key].value}
                    >
                      <div className='check-box-custom'>
                        <Tick></Tick>
                      </div>
                      {key}

                      <span className={'filter-count'}>({checkedList[key].count})</span>
                    </Checkbox>
                  </div>
                );
              })}
          </Checkbox.Group>
        </Scrollbar>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});
export default connect(mapStateToProps, null)(Filter);
