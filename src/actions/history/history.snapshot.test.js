import {
  historyReducer as reducer,
  updateHistory,
  UPDATE_HISTORY_ACTION
} from './index';
import { updateExpression, EXPRESSION_UPDATE_ACTION } from '../expression';

describe('history reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it(`should handle ${EXPRESSION_UPDATE_ACTION} action`, () => {
    const action = updateExpression(10);
    const initialState = undefined;

    // First invoke
    const state1 = reducer(initialState, action);
    expect(state1).toMatchSnapshot();

    // Second invoke
    const action2 = updateExpression(15);
    const state2 = reducer(state1, action2);
    expect(state2).toMatchSnapshot();

    // Should not add the same item again
    const action3 = updateExpression(15);
    const state3 = reducer(state2, action3);
    expect(state3).toMatchSnapshot();
  });

  it(`should not add the same expression again when handling ${EXPRESSION_UPDATE_ACTION}`, () => {
    const action = updateExpression(10);
    const initialState = ["10"];

    const state1 = reducer(initialState, action);
    expect(state1).toMatchSnapshot();
  });

  it(`should handle ${UPDATE_HISTORY_ACTION} action`, () => {
    const action = updateExpression("1");
    const initialState = undefined;

    // First invoke
    const state1 = reducer(initialState, action);
    expect(state1).toMatchSnapshot();

    // Second invoke
    const action2 = updateExpression("5+5");
    const state2 = reducer(state1, action2);
    expect(state2).toMatchSnapshot();

    // Should not add the same item again
    const action3 = updateExpression("5+5");
    const state3 = reducer(state2, action3);
    expect(state3).toMatchSnapshot();
  });

  it(`should not add the same expression again when handling ${UPDATE_HISTORY_ACTION}`, () => {
    const action = updateExpression("5+5");
    const initialState = ["5+5"];

    const state1 = reducer(initialState, action);
    expect(state1).toMatchSnapshot();
  });
});
