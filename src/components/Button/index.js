import React, { Component } from 'react';

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

export default Button;
