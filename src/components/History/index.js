import React from 'react';
import Button from '../Button';

export const History = ({
  showHistory, history, toggleHistory, historyItemClickHandler
}) => (
  <section className={`history ${showHistory ? 'visible' : ''}`}>
      <Button text="+" clickHandler={toggleHistory} buttonClass="toggle-close"/>
      {history.map((mem, i) => (
          <Button key={i} buttonClass="block transparent"
                  text={mem} clickHandler={historyItemClickHandler}/>
      ))}
  </section>
);

export default History;
