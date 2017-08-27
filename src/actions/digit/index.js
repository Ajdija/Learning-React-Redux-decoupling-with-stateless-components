export const DIGIT_CLICK_ACTION = 'DIGIT_CLICK_ACTION';
export const CLICKED_DIGIT_KEY = 'CLICKED_DIGIT_KEY';

export const digitClick = digit => ({
  type: DIGIT_CLICK_ACTION,
  payload: { [CLICKED_DIGIT_KEY]: digit }
})
