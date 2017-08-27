import { combineReducers } from 'redux';
import { expressionReducer } from './expression';

export default combineReducers({
  curExpression: expressionReducer
});
