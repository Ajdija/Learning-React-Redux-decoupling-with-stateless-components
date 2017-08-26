import React from 'react';
import ee from '../../eventEmitter';

let state = '0';

export const updateDisplay = (newStr) => {
    state = { text: newStr.toString().split(' ').reverse().join(' ') };
}

export const Display = ({ text, clickHandler }) => {
  ee.addListener('displayUpdate', updateDisplay);
  state = { text: text || '0' };

  return <div className="display" onClick={clickHandler ? clickHandler : null}>{state.text}</div>
}

export default Display;
