import React from 'react';
import Button from '../Button';

export const Operators = ({
  operators = ["+", "-", "*", "/"],
  calculateSign = "=",
  className = "buttons--operators",
  operatorClickHandler, calculateExpression
}) => (
    <section className={className}>
        {operators.map((op, i) => (
            <Button key={i} text={op} clickHandler={operatorClickHandler}/>)
        )}
        <Button text={calculateSign} clickHandler={calculateExpression}/>
    </section>
)

export default Operators;
