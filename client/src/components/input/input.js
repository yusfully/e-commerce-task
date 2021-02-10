import React from 'react';

import { Fragment } from 'react';

const Input = ({ onChange, type, placeHolder }) => {
  return (
    <Fragment>
      <input
        onChange={(e) => onChange && onChange(e)}
        type={type || 'input'}
        placeHolder={placeHolder && placeHolder}
      ></input>
    </Fragment>
  );
};

export default Input;
