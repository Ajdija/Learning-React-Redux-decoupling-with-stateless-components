import ee from '../eventEmitter';

export const store = {
    displayedExpression: 0,
    get curExpression() {
        return this.displayedExpression;
    },
    set newExpression(curExpression) {
        this.displayedExpression = curExpression;
        ee.emitEvent('displayUpdate', [this.curExpression]);
        ee.emitEvent('historyUpdate', [this.curExpression]);
    }
};

export default store;
