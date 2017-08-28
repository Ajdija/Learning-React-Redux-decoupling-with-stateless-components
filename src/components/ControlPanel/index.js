import React from 'react';
import Button from '../Button';

export const ControlPanel = ({
  showHistory, clearDisplay, removeOneChar,
  sectionClassName = "buttons--controls",
  buttonClassName = "control",
  clearText = "c",
  historyText = "history",
  removeOneText = String.fromCharCode(8592)
}) => (
  <section className={sectionClassName}>
      <Button buttonClass={buttonClassName} text={removeOneText} clickHandler={removeOneChar}/>
      <Button buttonClass={buttonClassName} text={clearText} clickHandler={clearDisplay}/>
      <Button buttonClass={buttonClassName} text={historyText} clickHandler={showHistory}/>
  </section>
);

export default ControlPanel;
