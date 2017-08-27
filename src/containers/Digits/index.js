import { connect } from 'react-redux';
import { digitClick } from '../../actions/digit';
import DigitsView from '../../components/Digits';

export const digitClickHandler = dispatch => (numberClicked) => dispatch(digitClick(numberClicked));

const mapDispatchToProps = (dispatch) => ({
  digitClickHandler: digitClickHandler(dispatch)
})

export default connect(null, mapDispatchToProps)(DigitsView);
