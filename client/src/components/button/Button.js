import React, { useRef, useEffect, useState } from 'react';
import { Children } from 'react';
import './button.scss';

const Button = ({ className, text, type, onClick, children }) => {
  const buttonRef = useRef();

  return (
    <div className={`${className}`}>
      <button ref={buttonRef} type={type ? type : 'button'} onClick={(e) => onClick && onClick(e)}>
        {children}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
