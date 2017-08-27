import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display';
import ControlPanel from '../ControlPanel';
import Digits from '../Digits';
import Operators from '../Operators';
import History from '../History';
import store from '../../store';

class Calculator extends Component {
  render() {
      return (
          <main className="react-calculator">
              <Display text={store.getState().curExpression} />
              <ControlPanel />
              <Digits />
              <Operators />
              <History showHistory={store.getState().showHistory}
                       history={store.getState().history} />
          </main>
      )
  }
}

export default Calculator;
