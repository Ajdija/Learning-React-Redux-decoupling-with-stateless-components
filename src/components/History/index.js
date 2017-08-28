import React from 'react';
import Button from '../Button';

export const History = ({
  showHistory, history, toggleHistory, historyItemClickHandler,
  historyItemButtonClassName = "block transparent",
  closeButtonText = "+",
  closeButtonClassName = "toggle-close",
  className = "history"
}) => (
  <section className={`${className} ${showHistory ? 'visible' : ''}`}>
      <Button text={closeButtonText} clickHandler={toggleHistory} buttonClass={closeButtonClassName}/>
      {history.map((mem, i) => (
          <Button key={i} buttonClass={historyItemButtonClassName}
                  text={mem} clickHandler={historyItemClickHandler}/>
      ))}
  </section>
);

export default History;
