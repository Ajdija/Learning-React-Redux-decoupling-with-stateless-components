import { connect } from 'react-redux';
import HistoryView from '../../components/History';
import { toggleHistory } from '../../actions/history';
import { updateExpression } from '../../actions/expression';

export const historyItemClickHandler = dispatch => history => {
  dispatch(updateExpression(history));
  dispatch(toggleHistory());
}

const mapDispatchToProps = (dispatch) => ({
  historyItemClickHandler: historyItemClickHandler(dispatch),
  toggleHistory: () => dispatch(toggleHistory())
})

export default connect(null, mapDispatchToProps)(HistoryView);
