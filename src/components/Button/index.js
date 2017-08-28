import React from 'react';

export const Button = ({ text, buttonClass, clickHandler, spanClass = "title" }) => (
    <button
      className={buttonClass}
      onClick={() => clickHandler ? clickHandler.call(null, text) : null}
    >
        <span className={spanClass}>{text}</span>
    </button>
);

export default Button;
