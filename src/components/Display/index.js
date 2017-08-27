import React from 'react';

export const Display = ({ text = 0, clickHandler }) => (
  <div className="display" onClick={clickHandler ? clickHandler : null}>
    {text.toString().split(' ').reverse().join(' ')}
  </div>
)

export default Display;
