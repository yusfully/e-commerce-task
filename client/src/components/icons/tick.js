import React from 'react';

const Arrow = ({ side, color }) => {
  return (
    <svg width='11' height='8' viewBox='0 0 13 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.6667 1L4.33333 8.33333L1 5'
        stroke={color || 'white'}
        stroke-width='1.2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Arrow;
