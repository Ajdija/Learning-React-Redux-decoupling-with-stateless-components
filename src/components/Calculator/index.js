import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display';
import ControlPanel from '../../containers/ControlPanel';
import Digits from '../../containers/Digits';
import Operators from '../../containers/Operators';
import History from '../../containers/History';
import PropTypes from 'prop-types';

class Calculator extends Component {
  render() {
      return (
          <main className={this.props.className ? this.props.className : "react-calculator"}>
              <Display text={this.context.store.getState().curExpression} />
              <ControlPanel />
              <Digits />
              <Operators />
              <History showHistory={this.context.store.getState().showHistory}
                       history={this.context.store.getState().history} />
          </main>
      )
  }
}

Calculator.contextTypes = {
  store: PropTypes.object.isRequired
};

export default Calculator;
