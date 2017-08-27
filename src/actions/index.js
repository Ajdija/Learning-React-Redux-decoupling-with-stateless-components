import { combineReducers } from 'redux';
import { expressionReducer } from './expression';
import { showHistoryReducer, historyReducer } from './history';

export default combineReducers({
  curExpression: expressionReducer,
  showHistory: showHistoryReducer,
  history: historyReducer
});
