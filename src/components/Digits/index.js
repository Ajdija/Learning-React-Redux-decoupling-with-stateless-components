import React from 'react';
import store from '../../store';
import Button from '../Button';
import { updateExpression } from '../../actions/expression';

export const digitClickHandler = (numberClicked) => {
  if (!store.getState().curExpression) {
      return updateExpression(numberClicked);
  }

  return updateExpression(`${store.getState().curExpression}${numberClicked}`);
}

export const Digits = () => (
  <section className="buttons--digits">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
          .map(nr => <Button key={nr} text={nr} clickHandler={digitClickHandler}/>)}
  </section>
);

export default Digits;
