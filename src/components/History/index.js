import React from 'react';
import Button from '../Button';
import { toggleHistory } from '../../actions/history';
import { updateExpression } from '../../actions/expression';

export const historyItemClickHandler = history => {
  updateExpression(history);
  toggleHistory();
}

export const History = ({ showHistory, history }) => (
  <section className={`history ${showHistory ? 'visible' : ''}`}>
      <Button text="+" clickHandler={toggleHistory} buttonClass="toggle-close"/>
      {history.map((mem, i) => (
          <Button key={i} buttonClass="block transparent"
                  text={mem} clickHandler={historyItemClickHandler}/>
      ))}
  </section>
);

export default History;
