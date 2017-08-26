import React, { Component } from 'react';
import store from '../../store';
import Button from '../Button';

class Digits extends Component {
    digitClickHandler(num) {
        if (!store.curExpression) {
            return store.newExpression = num;
        }

        return store.newExpression = `${store.curExpression}${num}`;
    }

    render() {
        return <section className="buttons--digits">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
                .map(nr => <Button key={nr} text={nr} clickHandler={this.digitClickHandler}/>)}
        </section>
    }
}

export default Digits;
