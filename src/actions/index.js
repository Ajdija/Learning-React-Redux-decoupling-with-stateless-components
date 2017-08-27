import { combineReducers } from 'redux';
import { expressionReducer } from './expression';
import { showHistoryReducer } from './history';

export default combineReducers({
  curExpression: expressionReducer,
  showHistory: showHistoryReducer
});
