import {
  expressionReducer as reducer,
  updateExpression,
  EXPRESSION_UPDATE_ACTION
} from './index';
import { digitClick, DIGIT_CLICK_ACTION } from '../digit';

describe('expression reducer', () => {
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
  });

  it(`should handle ${DIGIT_CLICK_ACTION} action`, () => {
    const action = digitClick(0);
    const initialState = undefined;

    // First invoke
    const state1 = reducer(initialState, action);
    expect(state1).toMatchSnapshot();

    // Second invoke
    const action2 = digitClick(5);
    const state2 = reducer(state1, action2);
    expect(state2).toMatchSnapshot();
  });
});
