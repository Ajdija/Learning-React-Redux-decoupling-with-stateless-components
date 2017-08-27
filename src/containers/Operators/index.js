import { connect } from 'react-redux';
import OperatorsView from '../../components/Operators';
import { updateExpression } from '../../actions/expression';

export const operatorClickHandler = (type) => (dispatch, getState) =>
  dispatch(updateExpression(`${getState().curExpression} ${type} `));

export const calculateExpression = (dispatch, getState) => {
    /* eslint-disable */
    // This rule is important in production apps!
    // Read more: https://eslint.org/docs/rules/no-eval
    // To simplify the functionality in this course we use eval
    const calcFunc = eval;
    /* eslint-enable */
    try {
        dispatch(updateExpression(calcFunc(getState().curExpression)));
    } catch (e) {
        console.error("Error: Incorrect Expression of digits & operators :(")
    }
}

export const mapDispatchToProps = dispatch => ({
  operatorClickHandler: operator => dispatch(operatorClickHandler(operator)),
  calculateExpression: () => dispatch(calculateExpression)
})

export default connect(null, mapDispatchToProps)(OperatorsView);
