import store from '../../store';

export const TOGGLE_HISTORY_ACTION = 'TOGGLE_HISTORY_ACTION';

export const toggleHistory = () => store.dispatch({ type: TOGGLE_HISTORY_ACTION });

export const showHistoryReducer = (state = false, { type }) => {
  switch(type) {
    case TOGGLE_HISTORY_ACTION:
      return !state;
    default:
      return state;
  }
};
