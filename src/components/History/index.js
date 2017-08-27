import React, { Component } from 'react';
import store from '../../store';
import Button from '../Button';
import { toggleHistory } from '../../actions/history';
import { updateExpression } from '../../actions/expression';

class History extends Component {
    constructor(props) {
        super(props);

        this.state = { show: false, history: [] };
        this.addHistoryItem = this.addHistoryItem.bind(this);
        this.getHistoryItems = this.getHistoryItems.bind(this);
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

    historyItemClickHandler(history) {
        updateExpression(history);
        toggleHistory();
    }

    render() {
        return (
            <section className={`history ${store.getState().showHistory ? 'visible' : ''}`}>
                <Button text="+" clickHandler={toggleHistory} buttonClass="toggle-close"/>
                {this.getHistoryItems().map((mem, i) => (
                    <Button key={i} buttonClass="block transparent"
                            text={mem} clickHandler={this.historyItemClickHandler}/>
                ))}
            </section>
        )
    }
}

export default History;
