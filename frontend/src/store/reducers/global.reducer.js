import * as types from "../types"
const initialState = {
    codes: {}
};

const globalReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.STORE_GLOBAL_CODES:
            return { ...state, codes: actions.payload }
        default:
            return state;
    }
}
export default globalReducer;
