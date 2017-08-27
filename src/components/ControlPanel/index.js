import React from 'react';
import Button from '../Button';

export const ControlPanel = ({ showHistory, clearDisplay, removeOneChar }) => (
  <section className="buttons--controls">
      <Button buttonClass="control" text="&larr;" clickHandler={removeOneChar}/>
      <Button buttonClass="control" text="c" clickHandler={clearDisplay}/>
      <Button buttonClass="control" text="history" clickHandler={showHistory}/>
  </section>
);

export default ControlPanel;
