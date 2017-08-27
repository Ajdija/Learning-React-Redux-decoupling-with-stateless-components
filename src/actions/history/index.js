import { EXPRESSION_UPDATE_ACTION, NEW_EXPRESSION_KEY } from '../expression';

export const TOGGLE_HISTORY_ACTION = 'TOGGLE_HISTORY_ACTION';
export const UPDATE_HISTORY_ACTION = 'UPDATE_HISTORY_ACTION';
export const HISTORY_ITEM_KEY = 'HISTORY_ITEM_KEY';

export const toggleHistory = () => ({ type: TOGGLE_HISTORY_ACTION });

export const updateHistory = newExp => ({
  type: UPDATE_HISTORY_ACTION,
  payload: { [HISTORY_ITEM_KEY]: newExp }
})

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

export const addHistoryItem = (item, history) => {
    if (isNotInHistory(item, history)) {
      return [...history, item.toString().trim()];
    }
    return history;
};

export const historyReducer = (history = [], { type, payload }) => {
  switch (type) {
    case EXPRESSION_UPDATE_ACTION:
      return addHistoryItem(payload[NEW_EXPRESSION_KEY], history);
    case UPDATE_HISTORY_ACTION:
      return addHistoryItem(payload[HISTORY_ITEM_KEY], history);
    default:
      return history;
  }
}
