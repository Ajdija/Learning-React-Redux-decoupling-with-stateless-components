import React from 'react';
import ee from '../../eventEmitter';
import store from '../../store';
import Button from '../Button';

export const showHistory = () => {
    ee.emitEvent('toggle-history');
}

export const clearDisplay = () => {
    store.newExpression = 0;
}

export const removeOneChar = () => {
    const curExpression = String(store.curExpression);
    const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

    return store.newExpression = newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar;
}

export const ControlPanel = () => (
  <section className="buttons--controls">
      <Button buttonClass="control" text="&larr;" clickHandler={removeOneChar}/>
      <Button buttonClass="control" text="c" clickHandler={clearDisplay}/>
      <Button buttonClass="control" text="history" clickHandler={showHistory}/>
  </section>
);

export default ControlPanel;
