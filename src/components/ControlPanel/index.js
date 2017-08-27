import React from 'react';
import store from '../../store';
import Button from '../Button';
import { updateExpression } from '../../actions/expression';

export const clearDisplay = () => updateExpression(0);

export const removeOneChar = () => {
    const curExpression = String(store.getState().curExpression);
    const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

    return updateExpression(newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar);
}

export const ControlPanel = ({ showHistory }) => (
  <section className="buttons--controls">
      <Button buttonClass="control" text="&larr;" clickHandler={removeOneChar}/>
      <Button buttonClass="control" text="c" clickHandler={clearDisplay}/>
      <Button buttonClass="control" text="history" clickHandler={showHistory}/>
  </section>
);

export default ControlPanel;
