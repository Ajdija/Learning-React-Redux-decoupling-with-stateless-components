import store from '../../store';
import { EXPRESSION_UPDATE_ACTION, NEW_EXPRESSION_KEY } from '../expression';

export const TOGGLE_HISTORY_ACTION = 'TOGGLE_HISTORY_ACTION';

export const toggleHistory = () => store.dispatch({ type: TOGGLE_HISTORY_ACTION });

export const showHistoryReducer = (state = false, { type }) => {
  switch (type) {
    case TOGGLE_HISTORY_ACTION:
      return !state;
    default:
      return state;
  }
};

export const isNotInHistory = (expression, history) => (
  (expression || expression === 0) &&
  (history.filter(i => i === expression.toString().trim()).length === 0)
);

export const historyReducer = (state = [], { type, payload }) => {
  switch (type) {
    case EXPRESSION_UPDATE_ACTION:
      const expression = payload[NEW_EXPRESSION_KEY];
      if (isNotInHistory(expression, state)) {
        return [...state, expression.toString().trim()];
      }
      return state;
    default:
      return state;
  }
}
