import React from 'react';

const FilterBox = ({ title, children }) => {
  return (
    <div className='side-bar-container'>
      <h5>{title}</h5>
      {children}
    </div>
  );
};

export default FilterBox;
