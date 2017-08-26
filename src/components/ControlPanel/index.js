import React, { Component } from 'react';
import ee from '../../eventEmitter';
import store from '../../store';
import Button from '../Button';

class ControlPanel extends Component {
    showHistory() {
        ee.emitEvent('toggle-history');
    }

    clearDisplay() {
        store.newExpression = 0;
    }

    removeOneChar() {
        const curExpression = String(store.curExpression);
        const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

        return store.newExpression = newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar;
    }

    render() {
        return (
            <section className="buttons--controls">
                <Button buttonClass="control" text="&larr;" clickHandler={this.removeOneChar}/>
                <Button buttonClass="control" text="c" clickHandler={this.clearDisplay}/>
                <Button buttonClass="control" text="history" clickHandler={this.showHistory}/>
            </section>
        )
    }
}

export default ControlPanel;
