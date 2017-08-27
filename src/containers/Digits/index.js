import { connect } from 'react-redux';
import { digitClick } from '../../actions/digit';
import DigitsView from '../../components/Digits';
import { updateHistory } from '../../actions/history';

export const digitClickHandler = numberClicked => (dispatch, getState) => {
  dispatch(digitClick(numberClicked));
  dispatch(updateHistory(getState().curExpression));
}

const mapDispatchToProps = (dispatch) => ({
  digitClickHandler: numberClicked => dispatch(digitClickHandler(numberClicked))
})

export default connect(null, mapDispatchToProps)(DigitsView);
