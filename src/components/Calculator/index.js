import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display';
import ControlPanel from '../ControlPanel';
import Digits from '../Digits';
import Operators from '../Operators';
import History from '../History';

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

export default Calculator;
