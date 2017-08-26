import React, { Component } from 'react';
import ee from '../../eventEmitter';

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

export default Display;
