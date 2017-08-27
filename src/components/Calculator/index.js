import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display';
import ControlPanel from '../../containers/ControlPanel';
import Digits from '../../containers/Digits';
import Operators from '../Operators';
import History from '../../containers/History';
import store from '../../store';

class Calculator extends Component {
  render() {
      return (
          <main className="react-calculator">
              <Display text={store.getState().curExpression} />
              <ControlPanel store={store} />
              <Digits store={store} />
              <Operators />
              <History store={store}
                       showHistory={store.getState().showHistory}
                       history={store.getState().history} />
          </main>
      )
  }
}

export default Calculator;
