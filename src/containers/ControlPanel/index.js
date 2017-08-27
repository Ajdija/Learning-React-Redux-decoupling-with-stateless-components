import { connect } from 'react-redux';
import ControlPanelView from '../../components/ControlPanel';
import { toggleHistory } from '../../actions/history';

export const showHistory = dispatch => dispatch(toggleHistory());

const mapDispatchToProps = (dispatch) => ({
  showHistory: () => showHistory(dispatch)
})

export default connect(null, mapDispatchToProps)(ControlPanelView);
