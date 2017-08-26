import React, { Component } from 'react';
import store from '../../store';
import Button from '../Button';

class Operators extends Component {
    opHandler(type) {
        store.newExpression = `${store.curExpression} ${type} `;
    }

    calculateExpression() {
        /* eslint-disable */
        // This rule is important in production apps!
        // Read more: https://eslint.org/docs/rules/no-eval
        // To simplify the functionality in this course we use eval
        const calcFunc = eval;
        /* eslint-enable */
        try {
            store.newExpression = calcFunc(store.curExpression);
        } catch (e) {
            console.error("Error: Incorrect Expression of digits & operators :(")
        }
    }

    render() {
        return (
            <section className="buttons--operators">
                {["+", "-", "*", "/"]
                    .map((op, i) => (
                        <Button key={i} text={op} clickHandler={this.opHandler}/>)
                    )}
                <Button text="=" clickHandler={this.calculateExpression}/>
            </section>
        )
    }
}

export default Operators;
