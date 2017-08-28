import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const renderCalculator = () => {
  ReactDOM.render(<Provider store={store}><Calculator /></Provider>, document.getElementById('root'));
};

store.subscribe(renderCalculator);
renderCalculator();
registerServiceWorker();
