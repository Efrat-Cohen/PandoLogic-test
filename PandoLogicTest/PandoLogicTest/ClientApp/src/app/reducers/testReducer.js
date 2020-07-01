"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestActions = require("./../actions/testActions");
var initialState = null;
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TestActions.UPDATE_DATA:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=testReducer.js.map