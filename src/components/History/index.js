import React, { Component } from 'react';
import store from '../../store';
import Button from '../Button';
import ee from '../../eventEmitter';

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

export default History;
