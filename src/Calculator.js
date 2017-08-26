import React, { Component } from 'react';
import './Calculator.css';
import EventEmitter from 'wolfy87-eventemitter';

class Calculator extends Component {
    render() {
        return (
            <main className="react-calculator">
                <Display />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

const ee = new EventEmitter();
let store = {
    displayedExpression: 0,
    get curExpression() {
        return this.displayedExpression;
    },
    set newExpression(curExpression) {
        this.displayedExpression = curExpression;
        ee.emitEvent('displayUpdate', [this.curExpression]);
        ee.emitEvent('historyUpdate', [this.curExpression]);
    }
};


class Display extends Component {
    constructor(props) {
        super(props);

        this.state = { text: this.props.text || '0' };
        this.updateDisplay = this.updateDisplay.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    updateDisplay(newStr) {
        return this.setState({ text: newStr.toString().split(' ').reverse().join(' ') });
    }

    componentWillMount() {
        ee.addListener('displayUpdate', this.updateDisplay);
    }

    onClickHandler() {
        if (this.props.clickHandler) {
            this.props.clickHandler.call(this);
        }
    }

    render() {
        return <div className="display" onClick={this.onClickHandler}>{this.state.text}</div>
    }
}

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

class History extends Component {
    constructor(props) {
        super(props);

        this.state = { show: false, history: [] };
        this.toggleHistory = this.toggleHistory.bind(this);
        this.addHistoryItem = this.addHistoryItem.bind(this);
        this.getHistoryItems = this.getHistoryItems.bind(this);
    }

    componentWillMount() {
        ee.addListener('historyUpdate', this.addHistoryItem);
        ee.addListener('toggle-history', this.toggleHistory);
    }

    addHistoryItem(historyItem) {
        const trimmedItem = historyItem.toString().trim();
        if (this.getHistoryItems().filter(i => i === trimmedItem).length === 0) {
            this.setState({
                ...this.state,
                history: [
                    ...this.state.history,
                    trimmedItem
                ]
            });
        }
    }

    getHistoryItems() {
        return this.state.history.filter(h => !!h);
    }

    toggleHistory() {
        this.setState({ ...this.state, show: !this.state.show });
    }

    historyItemClickHandler(history) {
        store.newExpression = history;
        ee.emitEvent('toggle-history');
    }

    render() {
        return (
            <section className={`history ${this.state.show ? 'visible' : ''}`}>
                <Button text="+" clickHandler={this.toggleHistory} buttonClass="toggle-close"/>
                {this.getHistoryItems().map((mem, i) => (
                    <Button key={i} buttonClass="block transparent"
                            text={mem} clickHandler={this.historyItemClickHandler}/>
                ))}
            </section>
        )
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        if (this.props.clickHandler) {
            this.props.clickHandler.call(null, this.props.text);
        }
    }

    render() {
        return (
            <button className={this.props.buttonClass} onClick={this.onClickHandler}>
                <span className="title">{this.props.text}</span>
            </button>
        );
    }
}

export default Calculator;
