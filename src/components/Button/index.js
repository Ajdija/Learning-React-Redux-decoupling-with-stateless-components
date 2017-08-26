import React from 'react';

export const Button = ({ text, buttonClass, clickHandler }) => (
    <button
      className={buttonClass}
      onClick={() => clickHandler ? clickHandler.call(null, text) : null}
    >
        <span className="title">{text}</span>
    </button>
);

export default Button;
