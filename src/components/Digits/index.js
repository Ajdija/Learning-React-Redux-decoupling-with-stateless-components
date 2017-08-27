import React from 'react';
import Button from '../Button';

export const Digits = ({
  digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  className = "buttons--digits",
  digitClickHandler
}) => (
  <section className={className}>
      {digits.map(nr => <Button key={nr} text={nr} clickHandler={digitClickHandler}/>)}
  </section>
);

export default Digits;
