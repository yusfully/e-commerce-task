import React from 'react';
import style from './flex.module.scss';
const Grid = ({ children, rowHeight, space, col, colL, colS, colM, justifyItems, alignItems }) => {
  return (
    <div
      className={
        style.flex +
        `
            flex-l-${col || '1'}
            flex-s-${colS || '1'}
            flex-m-${colM || '1'}
            flex-xl-${colL || '1'}
            sp-${space ? space : 0}
            justify-${justifyItems ? justifyItems : 'center'}
            align-${alignItems ? alignItems : 'center'} grid`
      }
    >
      {children}
    </div>
  );
};
export default Grid;
