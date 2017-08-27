import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display';
import ControlPanel from '../ControlPanel';
import Digits from '../Digits';
import Operators from '../Operators';
import History from '../History';
import ee from '../../eventEmitter';
import store from '../../store';

class Calculator extends Component {
  constructor(props) {
    super(props);

    ee.addListener('displayUpdate', () => this.forceUpdate());
  }
  render() {
      return (
          <main className="react-calculator">
              <Display text={store.curExpression} />
              <ControlPanel />
              <Digits />
              <Operators />
              <History />
          </main>
      )
  }
}

export default Calculator;
