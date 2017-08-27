import { connect } from 'react-redux';
import ControlPanelView from '../../components/ControlPanel';
import { toggleHistory } from '../../actions/history';
import { updateExpression } from '../../actions/expression';

export const showHistory = dispatch => dispatch(toggleHistory());

export const removeOneChar = (dispatch, getState) => {
    const curExpression = String(getState().curExpression);
    const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

    dispatch(updateExpression(newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar));
}

const mapDispatchToProps = (dispatch) => ({
  showHistory: () => showHistory(dispatch),
  clearDisplay: () => dispatch(updateExpression(0)),
  removeOneChar: () => dispatch(removeOneChar)
})

export default connect(null, mapDispatchToProps)(ControlPanelView);
