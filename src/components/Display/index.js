import React from 'react';

export const Display = ({ text = 0, className = "display", clickHandler }) => (
  <div className={className} onClick={clickHandler ? clickHandler : null}>
    {text.toString().split(' ').reverse().join(' ')}
  </div>
)

export default Display;
